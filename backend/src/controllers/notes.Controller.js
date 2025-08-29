

const getNotes = async (req, res) => {
    res.status(200).send("You just Fetched The notes");
};

const postNotes = async (req, res) => {
    res.status(201).send("Post created successfully");
};

const putNotes = async (req, res) => {
    res.status(200).send("not updated sucessfully");
};

const deleteNotes = async (req, res) => {
    res.status(200).send("Notes is deleted successfully");
};


export { getNotes, postNotes, putNotes, deleteNotes };