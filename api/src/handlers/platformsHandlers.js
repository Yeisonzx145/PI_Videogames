

const platformsHandlers = async (req,res)=>{
    try {
        const response = await getPlatforms();
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}
module.exports = {
    platformsHandlers
}