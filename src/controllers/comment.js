/** @format */
const Comment = require("../models/comment");

async function leaveComment(req, res) {
  const {
    projectId,
    title,
    description,
    location,
    subjectNo,
    duration,
    date,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
  } = req.body;
  const comment = new Comment({
    projectId,
    title,
    description,
    location,
    subjectNo,
    duration,
    date,
    approvalNumber,
    governance,
    InclusionCriteria,
    ExclusionCriteria,
  });
  await comment.save();
  return res.json({ comment });
}

async function getComments(req, res) {
  const { pId } = req.query;
  if (pId) {
    const comments = await Comment.find({ projectId: pId });
    return res.json(comments);
  } else {
    const comment = await Project.find();
    return res.json(comment);
  }
}

async function deleteComment(req, res) {
  const { id } = req.params;
  const comment = await Comment.findByIdAndDelete(id);
  if (!comment) {
    return res.status(404).json("comment not found");
  }

  return res.json(comment);
}

module.exports = {
  leaveComment,
  getComments,
  deleteComment,
};
