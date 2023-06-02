document.querySelector("#burger-menu").addEventListener("click", () => {
  const menu = document.querySelector(".menu")
  menu.querySelectorAll("a").forEach((a) => {
    a.style.display = a.style.display === "" ? "flex" : ""
  })
  document.querySelector("#burger-menu").style.alignSelf = "flex-end"
})

document.querySelectorAll(".cat-title").forEach((title) => {
  const all = document.querySelectorAll(".exp-block")
  const study = document.querySelectorAll(".exp-block.study")
  const work = document.querySelectorAll(".exp-block.work")
  const tool = document.querySelectorAll(".exp-block.tool")
  title.addEventListener("click", () => {
    if (title.id === "all-label") {
      all.forEach((block) => {
        block.style.display = "flex"
      })
    } else if (title.id === "study-label") {
      study.forEach((block) => {
        block.style.display = "flex"
      })
      const notStudy = document.querySelectorAll(".exp-block:not(.study)")
      notStudy.forEach((block) => {
        block.style.display = "none"
      })
    } else if (title.id === "work-label") {
      work.forEach((block) => {
        block.style.display = "flex"
      })
      const notWork = document.querySelectorAll(".exp-block:not(.work)")
      notWork.forEach((block) => {
        block.style.display = "none"
      })
    } else if (title.id === "tool-label") {
      tool.forEach((block) => {
        block.style.display = "flex"
      })
      const notTool = document.querySelectorAll(".exp-block:not(.tool)")
      notTool.forEach((block) => {
        block.style.display = "none"
      })
    }
  })
})

