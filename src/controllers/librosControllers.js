import libros from "../models/libros.js";

const getAlllibrosEstadoDes = async (req, res) => {
    try {
        const respons = await libros.getAlllibrosEstadoDes();

        res.status(200).json(respons);
    } catch (error) {
        
    }
}

const getAlllibrosAutorEdit = async (req, res) => {
    try {
        
        const respons = await libros.getAlllibrosAutorEdit();

        res.status(200).json(respons);

    } catch (error) {
        
    }
}

export { getAlllibrosEstadoDes , getAlllibrosAutorEdit}