// ObjectId() method for converting studentId string into an ObjectId for querying database
//import { ObjectId } from 'mongodb';
import { Thought, User } from '../models/index.js';
import { Request, Response } from 'express';


/**
 * GET All Thoughts /thoughts
 * @returns an array of thoughts
*/
export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch(error: any){
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET Thought based on id /thoughts/:thoughtid
 * @param string thoughtId
 * @returns a single Student object
*/
export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
      const thoughtSpecific = await User.findById(thoughtId);
      if(thoughtSpecific) {
        res.json(thoughtSpecific);
      } else {
        res.status(404).json({
          message: 'Thought not found'
        });
      }
    } catch (error: any) {
      res.status(500).json({
        message: error.message
      });
    }
};

/**
 * POST Thought /thoughts
 * @param object thoughts
 * @returns a single Thought object
*/

export const createThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: {thoughts: thought._id} },
            { runValidators: true, new: true }
          );
          if (!user) {
            res.status(404).json({ message: 'No user with this id!' });
          }
        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
}

/**
 * PUT Thought based on id /api/thoughts/:thoughtId
 * @param object id, username
 * @returns a single User object
*/
export const updateThought = async (req: Request, res: Response) => {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: {thoughtText: req.body.thoughtText} },
        { runValidators: true, new: true }
      );

      if (!thought) {
        res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(thought)
    } catch (error: any) {
      res.status(400).json({
        message: error.message
      });
    }
  };


/**
 * DELETE Thought based on id /thoughts/:thoughtId
 * @param string id
 * @returns string 
*/

//NEED TO ASK/CHECK IF THIS DELETES THE ID IN USER!!!!
export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOne({ _id: req.params.thoughtId});
        if(thought) {
            await User.findOneAndUpdate(
            { username: thought.username },
            { $pull: {thoughts: thought._id} },
            { runValidators: true, new: true }
          );
        }
        await Thought.deleteOne({ _id: req.params.thoughtId});
        if(!thought) {
          res.status(404).json({
            message: 'No thought with that ID'
          });
        } 
        res.status(201).json({message: 'Thought has been deleted'});
      } catch (error: any) {
        res.status(500).json({
          message: error.message
        });
      }
}

/**
 * POST Reaction based on /thoughts/:thoughtId/reactions
 * @param string id
 * @param object assignment
 * @returns object student 
*/

export const addReaction = async (req: Request, res: Response) => {
    console.log('You are adding an reaction');
    //console.log(req.body);
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: [req.body] } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res
                .status(404)
                .json({ message: 'No thought found with that ID :(' });
        }

        return res.json(thought);
    } catch (err) {
        return res.status(500).json(err);
    }
}

/**
 * DELETE Reaction based on /thoughts/:thoughtId/reactions
 * @param string assignmentId
 * @param string studentId
 * @returns object student 
*/

export const removeReaction = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactiontId: req.body.reactionId } } },
            { runValidators: true, new: true }
        );

        if (!thought) {
            return res
                .status(404)
                .json({ message: 'No thought found with that ID :(' });
        }

        return res.json(thought);
    } catch (err) {
        return res.status(500).json(err);
    }
}
