import { CSSProperties } from 'react';

export class WebPushLogger {
  styles: Record<'log' | 'error' | 'warn' | 'info', CSSProperties> = {
    log: {
      color: 'white',
      background: '#87CEEB',
      padding: '4px',
      fontWeight: 'bold',
      borderRadius: '2px',
    },
    error: {
      color: 'white',
      background: '#F08080',
      padding: '4px',
      fontWeight: 'bold',
      borderRadius: '2px',
    },
    warn: {
      color: '#000000',
      background: '#FFD700',
      padding: '4px',
      fontWeight: 'bold',
      borderRadius: '2px',
    },
    info: {
      color: 'white',
      background: '#4682B4',
      padding: '4px',
      fontWeight: 'bold',
      borderRadius: '2px',
    },
  };
  log(message: string, payload: unknown = null) {
    console.log(`%c${message}`, this.formatStyle(this.styles.log), payload);
  }
  error(message: string, error: Error | null = null) {
    console.log(`%c${message}`, this.formatStyle(this.styles.error), error);
  }
  warn(message: string, payload: unknown = null) {
    console.log(`%c${message}`, this.formatStyle(this.styles.warn), payload);
  }
  info(message: string, payload: unknown = null) {
    console.log(`%c${message}`, this.formatStyle(this.styles.info), payload);
  }
  private formatStyle(style: CSSProperties): string {
    return Object.entries(style)
      .map(([key, value]) => `${this.camelToKebabCase(key)}: ${value}`)
      .join('; ');
  }

  private camelToKebabCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
  }
}
