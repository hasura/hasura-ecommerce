/* TABLE */
CREATE TABLE order_status (
  status text PRIMARY KEY
);

INSERT INTO order_status (
  status)
VALUES (
  'CREATED'),
(
  'PAID'),
(
  'SHIPPED'),
(
  'DELIVERED'),
(
  'CANCELLED'),
(
  'REFUNDED');
