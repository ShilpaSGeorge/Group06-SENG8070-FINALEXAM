import { Request, Response } from "express";
import { ReviewService } from "../service/ReviewService";

export class ReviewController {
  private reviewService = new ReviewService();

  async createReview(req: Request, res: Response): Promise<void> {
    const review = await this.reviewService.createReview(req.body);
    res.status(201).json(review);
  }

  async getReviews(req: Request, res: Response): Promise<void> {
    const reviews = await this.reviewService.getReviews();
    res.status(200).json(reviews);
  }

  async getReviewById(req: Request, res: Response): Promise<void> {
    const review = await this.reviewService.getReviewById(Number(req.params.id));
    res.status(200).json(review);
  }

  async updateReview(req: Request, res: Response): Promise<void> {
    const review = await this.reviewService.updateReview(Number(req.params.id), req.body);
    res.status(200).json(review);
  }

  async deleteReview(req: Request, res: Response): Promise<void> {
    await this.reviewService.deleteReview(Number(req.params.id));
    res.status(204).send();
  }
}
