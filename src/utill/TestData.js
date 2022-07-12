const TestData = {
    factory(id,name,artist,album) {
        return {
            id: id, 
            name: name, 
            artist: artist, 
            album: album
        }
    },

    search(term) {
        let result = []; 

        if(/test/i.test(term)) {
            result.push(
                {
                    id: 0,
                    name: "Test", 
                    artist: "Test Name",
                    album: "Test Album"
                }
            );
        }

        if(/rou/i.test(term) && /5/.test(term)) {
            const mins = "5 mins"
            const set = "Routine"

            result.push(
                this.factory(1,"Pet",mins,set)
                ,this.factory(2,"Buy Food",mins,set)
                ,this.factory(3,"Eat",mins,set)
                ,this.factory(4,"Etc of routine",mins,set)
            )
        }

        if(/rou/i.test(term) && /10/.test(term)) {
            const mins = "10 mins"
            const set = "Routine"

            result.push(
                this.factory(5,"Pet",mins,set)
                ,this.factory(6,"Buy Food",mins,set)
                ,this.factory(7,"Eat",mins,set)
                ,this.factory(8,"Etc of routine",mins,set)
            )
        }

        if(/rou/i.test(term) && /20/.test(term)) {
            const mins = "20 mins"
            const set = "Routine"

            result.push(
                this.factory(9,"Pet",mins,set)
                ,this.factory(10,"Buy Food",mins,set)
                ,this.factory(11,"Eat",mins,set)
                ,this.factory(12,"Etc of routine",mins,set)
            )
        }

        if(result === []) {
            
        }

        return result; 
    }

}

export default TestData; 