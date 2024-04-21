import db from "../Database/index.js";

export default function QuizzesRoutes(app) {
    app.get("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const quizzes = db.quizzes.filter((quiz) => quiz.courseNumber === cid);
        res.send(quizzes);
    });
    app.get("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        const quiz = db.quizzes.find((quiz) => quiz._id === quizId);
        res.send(quiz);
    });
    app.put("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const quizId = req.body._id;
        quizzes = db.quizzes.map((quiz) => {
            return quiz._id === quizId ? req.body : quiz;
        });
        res.send(quizzes);
    });
    app.post("/api/courses/:cid/quizzes", async (req, res) => {
        const { cid } = req.params;
        const newQuiz = {
            _id: Date.now().toString(),
            title: "Default Quiz Title",
            isPublished: false,
            courseNumber: cid,
        };
        db.quizzes.push(newQuiz);
        res.send(newQuiz);
    });
    app.delete("/api/courses/:cid/quizzes/:quizId", async (req, res) => {
        const { quizId } = req.params;
        quizzes = db.quizzes.filter((quiz) => quiz._id !== quizId);
        res.sendStatus(200);
    });
}