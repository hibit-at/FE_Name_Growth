from flask import Flask, jsonify, request
import torch

app = Flask(__name__)

@app.route("/api/inference", methods=["POST"])
def inference():
    input_data = request.json["input_data"]
    # ここでPyTorchモデルのロードや推論処理を実行します。
    # この例では、簡単なPyTorchの演算を行っています。
    input_tensor = torch.tensor(input_data)
    output_tensor = input_tensor * 2
    output_data = output_tensor.tolist()
    
    return jsonify({"output_data": output_data})

if __name__ == "__main__":
    app.run(debug=True)
