import { HEIGHT, WIDTH } from "../index";

export function transformToCenter(ctx: CanvasRenderingContext2D, rotation: number, scaleX = 1, scaleY = 1): void {
    transformTo(ctx, WIDTH * 0.5, HEIGHT * 0.5, rotation, scaleX, scaleY);
}

export function transformTo(ctx: CanvasRenderingContext2D, x:number, y: number, rotation: number, scaleX = 1, scaleY = 1): void {
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.scale(scaleX, scaleY);
    ctx.translate(-x, -y);
}