import * as dao from "./dao.js";

function QuizzesRoutes(app) {
    app.put("/api/courses/:cid/quizzes", async (req, res) => {
        const quizId = req.body._id;

        const status = await dao.updateQuiz(quizId, req.body);

        res.json(status);
    });

    app.post("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            title: "Default Title",
            cid: cid,
            points: 0,
            numQuestions: 0,
            isPublished: false,
            quizType: "Graded Quiz",
            assignmentGroup: "Quizzes",
            shuffleAnswers: true,
            timeLimit: 20,
            multipleAttempts: false,
            showCorrectAnswers: false,
            accessCode: "",
            oneQuestionAtATime: true,
            webcamRequired: false,
            lockQuestions: false,
            availableDate: new Date().toString(),
            dueDate: new Date().toString(),
            untilDate: new Date().toString(),
            questions: [],
        };
        const quiz = await dao.createQuiz(newQuiz);

        res.send(quiz);
    });

    app.get("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;

        const quiz = await dao.findQuizByQuizId(quizId);
        res.send(quiz);
    });

    app.get("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;

        const courseQuizzes = await dao.findQuizByCourseId(cid);
        res.send(courseQuizzes);
    });

    app.delete("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;

        const status = await dao.deleteQuiz(quizId);
        res.json(status);
    });
}
export default QuizzesRoutes;

// import db from "../Database/index.js"; 
// import fs from "fs";

// let quizzes = JSON.parse(
//     fs.readFileSync("Kanbas/Database/quizzes.js", "utf8")
// );

// function QuizzesRoutes(app) {
//     app.put("/api/courses/:cid/quizzes", async (req, res) => {
//         const { cid } = req.params;
//         const quizId = req.body._id;
//         quizzes = quizzes.map((quiz) => {
//             return quiz._id === quizId ? req.body : quiz;
//         });
//         res.send(quizzes);
//     });

//     app.post("/api/courses/:cid/quizzes", async (req, res) => {
//         const { cid } = req.params;
//         const newQuiz = {
//             _id: Date.now().toString(),
//             title: "Default Quiz Title",
//             isPublished: false,
//             courseNumber: cid,
//         };
//         quizzes.push(newQuiz);
//         res.send(newQuiz);
//     });

//     app.get("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
//         const { quizId } = req.params;

//         const quiz = quizzes.find((quiz) => quiz._id === quizId);
//         res.send(quiz);
//     });

//     app.get("/api/courses/:cid/quizzes", async (req, res) => {
//         const { cid } = req.params;

//         const courseQuizzes = quizzes.filter((quiz) => quiz.courseNumber === cid);
//         res.send(courseQuizzes);
//     });

//     app.delete("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
//         const { quizId } = req.params;

//         quizzes = quizzes.filter((quiz) => quiz._id !== quizId);
//         res.sendStatus(204);
//     });
// }

// export default QuizzesRoutes;
