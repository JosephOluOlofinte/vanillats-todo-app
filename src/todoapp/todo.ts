

const testVar: string = 'This is a test variable created in todo.ts file';

console.log(testVar);


function testFunc(element: HTMLParagraphElement) {
    element.innerHTML = `I don't really know what I'm doing. ${testVar}`;
};

export default testFunc;