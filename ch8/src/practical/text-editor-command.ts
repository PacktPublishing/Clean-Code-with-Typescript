export class TextDocument {
  private content = '';

  write(text: string): void {
    this.content += text;
  }

  deleteLast(length: number): void {
    this.content = this.content.slice(0, -length);
  }

  getContent(): string {
    return this.content;
  }
}

export interface UndoableCommand {
  execute(): void;
  undo(): void;
}

export class WriteCommand implements UndoableCommand {
  constructor(
    private readonly document: TextDocument,
    private readonly text: string
  ) {}

  execute(): void {
    this.document.write(this.text);
  }

  undo(): void {
    this.document.deleteLast(this.text.length);
  }
}

const textDocument = new TextDocument();
const writeCommand = new WriteCommand(textDocument, 'Hello, patterns!');
writeCommand.execute();
const beforeUndo = textDocument.getContent();
writeCommand.undo();
const afterUndo = textDocument.getContent();

export const textEditorCommandExample = { beforeUndo, afterUndo };
