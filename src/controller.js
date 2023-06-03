const pool=require("../db")
const queries=require('./queries')
//Modules for show

//it gives all shows
const getShows=(req,res)=>{
    pool.query(queries.getShows,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

//it gives show by id
const getShowsById=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getShowsById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows)
    })
}

//add new show
const addShows=(req,res)=>{
    
    const{title, description, image}=req.body;
    pool.query(queries.checkShowExists,[title],(error,results)=>{
         //check show already exist
        if(results.rows.length){
            res.send("Show already exist")
        }
        pool.query(queries.addShows,[title, description, image],(error,results)=>{
            if(error) throw error
            res.status(200).send("Show Created Successfully");
            
        })
        //add new show to db
 }) 
 }



//removes show
const removeShows=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getShowsById,[id],(error,results)=>{
        const noShowFound=!results.rows.length;
        if(noShowFound){
            res.send("Show does not exist");
        }

        pool.query(queries.removeShows,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Show removed successfully")
        }) 
    })
}

const removeEpi=(req,res)=>{
    const id=parseInt(req.params.id);
    pool.query(queries.getEpiById,[id],(error,results)=>{
        const noEpiFound=!results.rows.length;
        if(noEpiFound){
            res.send("Episode does not exist");
        }

        pool.query(queries.removeEpi,[id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Episode removed successfully")
        }) 
    })
}



//update existing show
const updateShow=(req,res)=>{
    const id=parseInt(req.params.id);
    const{title, description, image}=req.body;

    pool.query(queries.getShowsById,[id],(error,results)=>{
        const noShowFound=!results.rows.length;
        if(noShowFound){
            res.send("Show Does not exist")
        }
        pool.query(queries.updateShow,[title,description,image,id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("show updated successfully")
        })
    })
}


//modules for Episodes

//gives all episodes
const getEpi=(req,res)=>{
    pool.query(queries.getEpi,(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
    }

//it gives  episode by ID
    const getEpiById=(req,res)=>{
        const id=parseInt(req.params.id);
        
        pool.query(queries.getEpiById,[id],(error,results)=>{
            if(!results.rows.length) {
            res.send("Episode not found")
            }
            else{
                res.status(200).json(results.rows)
            }
        })
    }

     //add new episode
 const addEpi=(req,res)=>{
    const {title,description,image,audio}=req.body;
    pool.query(queries.checkEpiExists,[title],(error,results)=>{
        if(results.rows.length){
            res.send("Episode already Exist")
        }
        pool.query(queries.addEpi,[title,description,image,audio],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Episode Created Successfully")
        })
    })
 }
//updates he existing episode
 const updateEpi=(req,res)=>{
    const id=parseInt(req.params.id);
    const{title,description,image,audio}=req.body;

    pool.query(queries.getEpiById,[id],(error,results)=>{
        const noEpiFound=!results.rows.length;
        if(noEpiFound){
            res.send("Episode does not exist")
        }
        pool.query(queries.updateEpi,[title,description,image,audio,id],(error,results)=>{
            if(error) throw error;
            res.status(200).send("Episode updated successfully")
        })
    })
}

//delete episode


module.exports={
    getShows,
    getShowsById,
    addShows,
    removeShows,
    updateShow,
    getEpi,
    getEpiById,
    addEpi,
    updateEpi,
    removeEpi,
};