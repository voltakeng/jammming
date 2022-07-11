const CLIENT_ID = '048d73a35be043b582b31e0c33d8b29e';
const REDIRECT_URI = 'https://lambent-hamster-e6f8a4.netlify.app/'
let accessToken; 

const Spotify = {
    getAccessToken() {
        if(accessToken){
            return accessToken; 
        }

        // check for access token match 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/)
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1]; 
            const expires_In = Number(expiresInMatch[1]); 
            // This clears the parameters, allowing us to grab a new access token when it expires. 
            window.setTimeout(() => accessToken = '', expires_In*1000);
            window.history.pushState('Access Token', null, '/'); 
            return accessToken; 
        } else {
            const accessUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
            window.location = accessUrl; 
        }    
    },

    search(term) {
        const accessToken = Spotify.getAccessToken(); 
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(response => {
            return response.json(); 
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return []; 
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name, 
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }));
        })
    },

    savePlayList(name, trackUris) { 
        if(!name || !trackUris) {
            return; 
        }

        const accessToken = Spotify.getAccessToken(); 
        const headers = {Authorization: `Bearer ${accessToken}`}
        let userID; 

        return fetch('https://api.spotify.com/v1/me', {headers:headers}
                ).then(response => response.json()
                ).then(jsonResponse => {
                    userID = jsonResponse.id;
                    return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
                    {
                        headers: headers,
                        method: 'POST',
                        body: JSON.stringify({ name: name })
                    }).then(response => response.json()
                    ).then(jsonResponse => {
                        const playlistID = jsonResponse.id; 
                        return fetch(`https://api.spotify.com/v1/users/${userID}/playlists/${playlistID}/tracks`,
                        {
                            headers: headers,
                            method: 'POST',
                            body: JSON.stringify({ uris: trackUris })
                        })
                    })
                })
    }
}

export default Spotify; 