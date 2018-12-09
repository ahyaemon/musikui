export default class Reader {

    public static read_file_as_text(inputFile: File): Promise<any> {
        const temporaryFileReader = new FileReader()

        return new Promise((resolve, reject) => {
            temporaryFileReader.onerror = () => {
                temporaryFileReader.abort()
                reject(new DOMException("Problem parsing input file."))
            }

            temporaryFileReader.onload = () => {
                resolve(temporaryFileReader.result)
            }
            temporaryFileReader.readAsText(inputFile)
        })
    }

}
