const TestData = {
    search(term) {
        let result = []; 
        let box; 

        if(/test/i.test(term)) {
            box = {
                id: 0,
                name: "Test", 
                artist: "Test Name",
                album: "Test Album"
            }

            result.push(box); 
        }

        return result; 
    }

}

export default TestData; 