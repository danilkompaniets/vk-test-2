type EventListener = (...args: any[]) => void;

class EventEmitter {
    private events: Record<string, EventListener[]> = {};

    on(eventName: string, listener: EventListener): void {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName: string, ...args: any[]): void {
        const listeners = this.events[eventName];
        if (listeners) {
            listeners.forEach(listener => listener(...args));
        }
    }

    off(eventName: string, listener: EventListener): void {
        const listeners = this.events[eventName];
        if (!listeners) return;

        const index = listeners.indexOf(listener);
        if (index !== -1) {
            listeners.splice(index, 1);
        }
    }
}

export default EventEmitter;

const emitter = new EventEmitter();