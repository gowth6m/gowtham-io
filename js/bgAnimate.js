const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

let w;
let h;

const setCanvasExtents = () => {
  w = document.body.clientWidth;
  h = document.body.clientHeight;
  canvas.width = w;
  canvas.height = h;
};

setCanvasExtents();

window.onresize = () => {
  setCanvasExtents();
};

const makeStars = count => {
  const out = [];
  for (let i = 0; i < count; i++) {
    const star = {
      x: (Math.random() - 0.5) * w * 2,
      y: (Math.random() - 0.5) * h * 2,
      z: i * 1000 / count
    };
    out.push(star);
  }
  return out;
};

let stars = makeStars(4000);

const clear = () => {
  c.fillStyle = "black";
  c.fillRect(0, 0, canvas.width, canvas.height);
};

const putPixel = (x, y, brightness, size) => {
  const intensity = brightness * 255;
  const rgb = "rgb(" + intensity + "," + intensity + "," + intensity + ")";
  c.fillStyle = rgb;
  c.fillRect(x, y, size, size);
};

const moveStars = distance => {
  const count = stars.length;
  for (let star of stars) {
    star.z += distance;
  }
  for (let i = 0; stars[count - 1].z > 1000; i++) { 
    // Replace star
    stars.pop();
    stars.unshift({
      x: (Math.random() - 0.5) * w * 2,
      y: (Math.random() - 0.5) * h * 2,
      z: stars[0].z - 1000/count // keep z ordered
    });
  }
};

let prevTime;
const init = time => {
  prevTime = time;
  requestAnimationFrame(tick);
};

const tick = time => {
  let elapsed = time - prevTime;
  prevTime = time;

  moveStars(elapsed * 0.025);

  clear();

  const cx = w / 2;
  const cy = h / 2; 

  const count = stars.length;
  for (let star of stars) {
    const x = cx + star.x / (star.z * 0.001);
    const y = cy + star.y / (star.z * 0.001);

    if (x < 0 || x >= w || y < 0 || y >= h) {
      continue;
    }

    const distance = star.z / 1000;
    const brightness = 0.8 - distance * distance;
    const size = brightness * 4.5;

    putPixel(x, y, brightness, size);
  }

  requestAnimationFrame(tick);
};

requestAnimationFrame(init);