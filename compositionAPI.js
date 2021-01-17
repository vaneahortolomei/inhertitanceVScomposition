//create programmer function

const createProgrammer = function(name){
  const programmer = {
    name
  };
  return {
    ...programmer,
    ...canCode(programmer),
  }
};

const canCode = function({name}){
  return {
    code: () => {
      console.log(`${name} can code...`)
    }
  }
};

//create frontend function
const createFrontend = function(name){
  const programmer = createProgrammer(name)
  return {
    ...programmer,
    ...codeVue(programmer),
    ...codeReact(programmer)
  }
};

const codeVue = function({name}){
  return {
    vue: () => {
      console.log(`${name} can code on vue!`)
    }
  }
};
const codeReact = function({name}){
  return {
    react: () => {
      console.log(`${name} can code on react!`)
    }
  }
};


//create fullstack function
const createFullStackDev = function(name){
  const programmer = createProgrammer(name);
  return {
    ...programmer,
    ...codeAll(programmer)
  }
};

const codeAll = function({name}){
  return {
    php: () => {
      console.log(`${name} can code on php!`)
    },
    react: () => {
      console.log(`${name} can code on react!`)
    },
    vue: () => {
      console.log(`${name} can code on vue!`)
    }
  }
};

const developer = createProgrammer('Dasha');
developer.code();

const frontend = createFrontend('Vanea');
frontend.code();
frontend.vue();
frontend.react();

const fullStack = createFullStackDev('Jimmy');
fullStack.php();
fullStack.vue();
fullStack.react();
