function createNoti() {
    let count = 0;
    const notify = ()=> {
        const myNoti = new Notification('Hello, World!', {
            body: 'Hello ya ' + ++count + ' times!'
        })
    }
    return notify;
}
const notify = createNoti();


var titlebar = require('titlebar');

var t = titlebar();
t.appendTo(document.body);

t.on('close', function(e) {
	console.log('close');
});

// t.element exposes the root dom element
t.element.appendChild(document.createElement('div'));

// Clean up after usage
//t.destroy();