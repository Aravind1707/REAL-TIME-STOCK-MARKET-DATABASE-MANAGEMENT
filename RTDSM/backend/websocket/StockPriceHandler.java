public class StockPriceHandler extends TextWebSocketHandler {
    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws IOException {
        session.sendMessage(new TextMessage("Real-time Stock Prices Updated!"));
    }
}
