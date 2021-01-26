const fs = require('fs');
const parser = require('fast-xml-parser');

const getTimeZone = async (req, res) => {

    try {
            async function readXml(){
                let data = await fs.promises.readFile('timezone.xml');
                var jsonObj = parser.parse(data.toString())
                res.status(200).json({
                Status:jsonObj
            });
            };

            readXml();
            
    }
    catch{
            res.status(200).json({
                Status:"Error"
            });
    }

}

module.exports.getTimeZone = getTimeZone;