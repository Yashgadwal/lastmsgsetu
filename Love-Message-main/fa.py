import matplotlib.pyplot as plt

# Sales data
sales_data = [8800, 4000, 7000, 0, 1000, 4000, 7500, 5000, 2500, 4000, 0, 10000, 3000, 1000, 1000, 2000]
days = list(range(1, len(sales_data) + 1))

# Plotting the data
plt.figure(figsize=(10, 5))
plt.plot(days, sales_data, marker='o', linestyle='-', color='blue')
plt.title('Sales Data Over Time')
plt.xlabel('Day')
plt.ylabel('Sales')
plt.grid(True)
plt.xticks(days)
plt.tight_layout()

plt.show()
