import { getCustomRepository } from "typeorm";
import { ReviewRepository } from "../repository/ReviewRepository";
import { Review } from "../entity/Review";

export class ReviewService {
  private reviewRepository = getCustomRepository(ReviewRepository);

  async createReview(review: Review): Promise<Review> {
    return this.reviewRepository.save(review);
  }

  async getReviews(): Promise<Review[]> {
    return this.reviewRepository.find();
  }

  async getReviewById(id: number): Promise<Review | undefined> {
    return this.reviewRepository.findOne(id);
  }

  async updateReview(id: number, review: Review): Promise<Review | undefined> {
    await this.reviewRepository.update(id, review);
    return this.getReviewById(id);
  }

  async deleteReview(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}
