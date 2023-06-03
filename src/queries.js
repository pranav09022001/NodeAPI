//queries for shows
const getShows="SELECT * FROM show_details";
const getShowsById="SELECT * FROM show_details WHERE id=$1";
const checkShowExists="SELECT s FROM show_details s WHERE s.title=$1";
const addShows="INSERT INTO show_details(title, description, image) VALUES ($1,$2,$3)";
const removeShows="DELETE FROM show_details WHERE id=$1"
const updateShow="UPDATE show_details SET title=$1,description=$2,image=$3 WHERE id=$4";

//queries for episode
const getEpi="SELECT * FROM episode_details";
const getEpiById="SELECT * FROM episode_details WHERE id=$1";
const checkEpiExists="SELECT s FROM episode_details s WHERE s.title=$1";
const addEpi="INSERT INTO episode_details(title, description, image,audio ) VALUES ($1,$2,$3,$4)";
const updateEpi="UPDATE episode_details SET title=$1,description=$2,image=$3,audio=$4 WHERE id=$5"
const removeEpi="DELETE FROM episode_details WHERE id=$1"


module.exports={
    getShows,
    getShowsById,
    checkShowExists,
    addShows,
    removeShows,
    updateShow,
    getEpi,
    getEpiById,
    addEpi,
    checkEpiExists,
    removeEpi,
    updateEpi,
    removeEpi,
};