function globalIntroduction(){
  // console.log(this);
  return `Hey, I'm ${this.fullName}`
}

const rei = {
  fullName: "Reinald Reynoso",
  name: "Rei",
  introduce: globalIntroduction
}

const eric = {
  fullName: "Hyeok Jung Kim",
  name: "Eric",
  introduce: globalIntroduction
}

const leizl = {
  fullName: "Leizl Samano",
  name: "Leizl",
  introduce: globalIntroduction
}

console.log(eric.introduce())
