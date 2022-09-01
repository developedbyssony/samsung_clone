const express = require('express');
const fs = require('fs');

const app = express();
let tmp = ''

app.use(express.json); //미들웨어 추가하여 json받아올 수 있도록함

const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));

function save() {
    fs.writeFileSync("data.json", JSON.stringify(data), "utf-8");
}

app.get("/", (req,res) => {
    res.json(data.filter(d => d.deleted_at === null));
})

app.get("/tmp", (req,res) => {
    res.json({
        rs: tmp
    })
})

app.get("/:id", (req,res) => {
    const id = parseInt(req.params.id)
    
    console.log(id);

    if(isNaN(id) || data.length <= id || id < 0) {
        res.status(400).json({
                msg: "잘못된 id입니다."
        })
    return;
    }

    if(data[id].deleted_at !== null) {
        res.status(404).json({
            msg:"이미 제거된 메모입니다."
        })
        return;
    }

        res.json(data);
    })

app.delete("/:id", (req,res) => {
    const id = parseInt(req.params.id)

    if(isNaN(id) || data.length <= id || id < 0) {
        res.status(400).json({
                msg: "잘못된 id입니다."
        })
        return;
    }
    if(data[id].deleted_at !== null)
        res.status(400).json({
            msg:"이미 제거된 메모입니다."
        })
        
    data[id].deleted_at = Date.now()

    res.json(data[id])

    save()
})

app.delete("/", (req,res) => {
    const list = []
    for(const memo of data) {
        if(memo.deleted_at != null) {
            memo.deleted_at = Date.now()
        }
    }
    res.json(list)
    save()
})

app.post("/", (req,res) => {
    const { content } = req.body

    console.log(content)

    if(content || content.length === 0) {
        res.status(400).json({
            msg: "content가 올바르지 않습니다."
        })
        return;
    }

    const memo = {
        content,
        created_at: Date.now(),
        updated_at: null,
        deleted_at:null
    }
    data.push(memo)
    res.json(data)

    save()
})

app.post("/tmp", (req,res) => {
    const { content } = req.body

    if (!content) {
        res.status(400).json({
            msg: "content가 올바르지 않습니다."
        })
        return;
    }

    tmp = content;

    res.json({
        rs:true
    })
})

app.put("/:id",(req,res) => {
    const id = parseInt(req.params.id)
    const { content } = req.body

    if(isNaN(id) || data.length <= id || id < 0) {
        res.status(400).json({
                msg: "잘못된 id입니다."
        })
        return;
    }

    if(!content || content.length === 0) {
        res.status(400).json({
            msg: "content가 올바르지 않습니다."
        })
        return;
    }

    if(data[id].deleted_at !== null) {
    res.status(400).json({
        msg:"이미 제거된 메모입니다."
      })
      return;
    }

    data[id].updated_at = Date.now()

    res.json(data[id])

    save()
})

app.listen(8080, () => {
    console.log("클라우드 메모장 서버 시작!");
}) 