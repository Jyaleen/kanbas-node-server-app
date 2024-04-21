import model from "./model.js";

export const createQuiz = (quiz) => {
    delete quiz._id;
    return model.create(quiz);
};

export const findAllQuizzes = () => model.find();

export const findQuizByCourseId = (cid) => model.find({ cid: cid });

export const findQuizByQuizId = (id) => model.findOne({ _id: id });

export const updateQuiz = (quizId, quiz) =>
    model.updateOne({ _id: quizId }, { $set: quiz });

export const deleteQuiz = (quizId) => model.deleteOne({ _id: quizId });