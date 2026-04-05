@Controller
public class FeedbackController {

    @Autowired
    private FeedbackRepository repo;

    @PostMapping("/submitFeedback")
    public String submit(@ModelAttribute Feedback feedback) {
        repo.save(feedback);
        return "success";
    }
}