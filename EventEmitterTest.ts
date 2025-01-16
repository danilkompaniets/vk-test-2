import EventEmitter from './EventEmitter';

const emitter = new EventEmitter();

// Обработчик события
const logData = (data: { message: string }) => {
    console.log(data.message);
};

// Подписка на событие 'test'
emitter.on('test', logData);

// Испускание события 'test'
emitter.emit('test', {message: 'Hello, world!'});

// Удаление обработчика
emitter.off('test', logData);

// Попытка испустить событие после удаления обработчика (ничего не произойдёт)
emitter.emit('test', {message: 'This will not be logged'});