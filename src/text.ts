import { Particle } from "./engine/particle";
import { Vector } from "./engine/vector";

export class TextEntity extends Particle {
    constructor(public content: string, private fontSize: number, x: number, y: number, life: number, velocity: Vector, private options?: TextOptions) {
        super(x, y, 0, 0, life, velocity);
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        const mod = this.options?.scales ? this.ratio : 1;
        ctx.font =`${this.fontSize * mod}px arial black`;
        ctx.textAlign = this.options?.align ?? "center";
        if(this.options?.shadow) {
            ctx.fillStyle = "#000";
            ctx.fillText(this.content, this.p.x + this.options.shadow, this.p.y + this.options.shadow);
        }
        ctx.fillStyle = this.options?.color ?? "#fff";
        ctx.fillText(this.content, this.p.x, this.p.y);
    }
}

export interface TextOptions {
    color?: string;
    align?: CanvasTextAlign;
    shadow?: number;
    scales?: boolean;
}