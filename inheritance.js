class Developer {
  constructor(name) {
    this.name = name;
  }
  code(){
    console.log(`${this.name} is coding...`)
  }
}

class Frontend extends Developer {
  vue(){
    console.log(`${this.name} is codding on Vue...`)
  }
}


class Backend extends Developer {
  nodejs(){
    console.log(`${this.name} is codding on Node...`)
  }
}

class Fullstack extends Developer {
  php(){
    console.log(`${this.name} is codding on php...`)
  }
}

const dev = new Developer('Dasha');
dev.code();
const frontend = new Frontend('Vanea');
frontend.vue();
const backend = new Backend('Andy');
backend.nodejs();

const fullstack = new Fullstack('Sanea');
fullstack.php();
