console.log('test');

async function func(path) {
    let module = await import('./plugins/' + path + '.js');
    console.log(module)
}