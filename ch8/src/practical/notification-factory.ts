export abstract class Notification {
  abstract send(message: string): string;
}

export class EmailNotification extends Notification {
  send(message: string): string {
    return `Sending email notification: ${message}`;
  }
}

export class SMSNotification extends Notification {
  send(message: string): string {
    return `Sending SMS notification: ${message}`;
  }
}

export class NotificationFactory {
  static getNotification(type: 'email' | 'sms'): Notification {
    if (type === 'email') {
      return new EmailNotification();
    }

    return new SMSNotification();
  }
}

export const notificationFactoryExample = NotificationFactory.getNotification('email').send(
  'Hello from the factory pattern.'
);
