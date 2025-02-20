@Entity
@Table(name = "stocks")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String symbol;
    private String companyName;
    private double price;
    private int volume;
    
    // Getters & Setters
}
