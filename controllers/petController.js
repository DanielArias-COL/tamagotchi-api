import pet from "../models/petModel.js";

export function getPet(req, res) {

    res.json({
        message: "Current pet status",
        pet
    });

}