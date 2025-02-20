@RestController
@RequestMapping("/api/stocks")
public class StockController {

    @Autowired
    private StockRepository stockRepository;

    @GetMapping("/")
    public List<Stock> getAllStocks() {
        return stockRepository.findAll();
    }
}
