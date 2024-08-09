import { ReviewService } from "../../service/ReviewService";
import { Review } from "../../entity/Review";
import { getCustomRepository } from "typeorm";
import { ReviewRepository } from "../../repository/ReviewRepository";

jest.mock("typeorm", () => ({
  getCustomRepository: jest.fn(),
}));

describe("ReviewService", () => {
  let reviewService: ReviewService;
  let reviewRepository: ReviewRepository;

  beforeEach(() => {
    reviewRepository = new ReviewRepository();
    (getCustomRepository as jest.Mock).mockReturnValue(reviewRepository);
    reviewService = new ReviewService();
  });

  it("should create a review", async () => {
    const review = new Review();
    review.rating = 5;
    reviewRepository.save = jest.fn().mockResolvedValue(review);

    const result = await reviewService.createReview(review);
    expect(result).toEqual(review);
    expect(reviewRepository.save).toHaveBeenCalledWith(review);
  });

  // Add more unit tests for other CRUD operations
});
