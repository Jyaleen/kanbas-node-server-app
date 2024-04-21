import mongoose from "mongoose";
const quizzesSchema = new mongoose.Schema(
    {
        cid: String,
        title: String,
        quizType: String,
        points: Number,
        assignmentGroup: String,
        shuffleAnswers: Boolean,
        timeLimit: Number,
        multipleAttempts: Boolean,
        showCorrectAnswers: Boolean,
        accessCode: String,
        oneQuestionAtATime: Boolean,
        webcamRequired: Boolean,
        lockQuestions: Boolean,
        dueDate: String,
        availableDate: String,
        untilDate: String,
        numQuestions: Number,
        isPublished: Boolean,
        questions: [
            {
                title: String,
                points: Number,
                question: String,
                questionType: String,
                answer: [
                    {
                        isCorrect: Boolean,
                        value: String,
                    },
                ],
            },
        ],
    },
    { collection: "quizzes" }
);
export default quizzesSchema;