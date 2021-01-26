const fs = require('fs');
const parser = require('fast-xml-parser');

const getTimeZone = async (req, res) => {

    try{
        let data = await fs.promises.readFile('timezone.xml');
        var jsonObj = parser.parse(data.toString())
        let search=jsonObj.TimeZones.TimeZone.filter((timezone)=>{
            return timezone.Name.includes(req.body.Name);
        });

        res.status(200).json({
            search
        });
    }
    catch(error){
        res.status(400).json({
            error
        });
    }

}

module.exports.getTimeZone = getTimeZone;