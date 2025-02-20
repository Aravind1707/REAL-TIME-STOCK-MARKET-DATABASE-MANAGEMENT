@Entity
@Table(name = "transactions")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @ManyToOne
    private User user;
    
    @ManyToOne
    private Stock stock;
    
    private String type; // BUY or SELL
    private int quantity;
    private double price;
    private LocalDateTime timestamp;
    
    // Getters & Setters
}
