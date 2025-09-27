// src/data/blogs.ts
export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  cover: string; // đường dẫn ảnh (public/)
  content: string; // có thể là markdown sau này
  tags: string[];
  date: string; // ISO date
  author: string;
  category: string;
};

export const blogs: Blog[] = [
  {
    id: "1",
    slug: "information-fusion",
    title: "Information Fusion",
    excerpt:
      "A Survey of multimodal hybrid deep learning for computer vision: Architectures, applications, trends",
    cover: "/information_fusion/1-s2.0-S156625352300533X-gr5.jpg",
    content: `Deep learning sử dụng **adaptive learning process** để học các **patterns** phức tạp từ datasets
Thông thường, hầu hết các hệ thống DL là **đơn kiến trúc**. Khi 2 hoặc nhiều kiến trúc kết hợp lại với nhau dựa trên **multiple sensory modalities**, ta gọi đó là **hybrid deep learning model**\n\n![](/information_fusion/1_0Y1L0zpAU733GCJQ8QOf1g.webp)\n\nThông qua việc extract feature từ nhiều mô hình, sau đó lấy kết quả fuse lại với nhau
**Cons**
- Phát triển nhiều models phức tạp để xử lý và phân tích **multimodal information** -> giúp hiểu được dữ liệu nhiều hơn -> tốn tài nguyên hơn
**Standalone discriminative, generative DNNs**: đây đều là những DL techniques thuộc loại SOTA và được áp dụng nhiều lĩnh vực
- CNN chủ yếu sử dụng để xử lý các visual cues, đồng thời khả năng tổng quát **tốt hơn các discriminative networks** khác
- RNN và các biến thể của nó được huấn luyện để truy xuất các **short-and long-range** features
---
**HYBRID FUSION**: là quá trình kết hợp giữa 2 hoặc nhiều **standalone architectues**
Mức độ hiệu quả của một hệ thống càng được nâng cao nếu: 

> **Tích hợp tri thức bổ sung và tri thức ngữ nghĩa từ nhiều nguồn dữ liệu và nhiều góc nhìn khác nhau.** 


Challenges?
- Phải biết cách tích hợp hiệu quả trên multimodal data
- Phải biết cách ánh xạ chúng vào **common feature space**

**Multimodal learning**
- Sử dụng các kĩ thuật cụ thể + fusion process để **encode modalities data**\n\n![](/information_fusion/1-s2.0-S156625352300533X-gr5.jpg)\n\n**Multimodal hybrid deep learning**
- Kết hợp giữa hai hoặc nhiều model, kiến trúc để giải quyết bài toán.\n\n![](/information_fusion/1_0Y1L0zpAU733GCJQ8QOf1g.webp)\n\n---
Hiện nay, Hybrid Deep Learning đang khá phổ biến, có nhiều ứng dụng tiềm năng như:
- Sử dụng 2 DNNs trong việc **highlights semantic correlations** để phát triển khả năng **nhận diện context** trong các video
---
Deep Neural Networks
	- Thông thường, **shallow network** được sử dụng để học các đặc trưng **low-levels** với số lượng khá ít các lớp ẩn
	- Về mặt cấu trúc, một Deep model thường chứa rất nhiều lớp perceptrons, điều này nghĩa là model chứa hàng triệu neurons trong các lớp\n\n![](/information_fusion/1_eJ36Jpf-DE9q5nKk67xT0Q.jpg)\n\nCác deep model phổ biến
- Deep belief networks (DBNs)
- Deep auto-encoders (DAEs)
- Generative adversarial networks (GANs)
- Recurrent neural networks (RNNs)
- Convolutional neural networks (CNNs)
- Graph neural networks (GNNs)
- **Vision transformers (ViTs)**: được xem mạnh hơn các mô hình khác\n\n![](/information_fusion/Vision-Transformer-Architecture_.webp)\n\nKiến trúc của ViT 
- Sử dụng **encoder-decoder** cho phép xử lý song song **continuous data streams** 
- Tận dụng **attention mechanism** để tập trung và tích hợp các **silent features** tại những vùng khác nhau
---
Feature extraction
Mục tiêu của Deep learning:
- Học representation
- Đầu vào là **raw data** + xác định **relevant features** -> predict
- Có thể trích xuất được **high-quality features** từ nhiều cấp độ biểu diễn hay trừu tượng trong dữ liệu
Có 4 loại features:
- Visual features
- Textual features
- Temporal features
- Spatio-temporal features
Visual features
- Gồm dữ liệu từ images, videos
- Được biểu diễn bởi **local - global visual features**
- Deep learning thường được xem như nền tảng trong việc trích xuất visual feature hiện nay
- Phương pháp thường gặp là sử dụng Deep learning để trích xuất **discriminative + abstract spatial** features
Text features
- Thông thường, text là kiểu dữ liệu **unstructured** nên sẽ không trực tiếp đưa vào thành input, bởi vì model có hiểu được đâu :v
- Phương pháp phổ biến là đưa text -> số, hay còn gọi là **text vectorization**
- Text features thường chứa cả **implicit + explicit**
- BERT được sử dụng để trích xuất **high-dimensional features**
Temporal features
- Mô tả dynamic data như ảnh 3D, videos hay dữ liệu dạng time-series
- Vì việc truy xuất feature có liên quan tới temporal features nên các mô hình RNNs (LSTM, GRU) với 3D CNN là những mô hình tốt nhất cho task này
Spatial-temporal features
- Là dữ liệu được thu thập từ nhiều sensors khác nhau. Những data này có thể được sử dụng cho **data analysis** và **prediction**
- Khả năng trích xuất **discriminative features** từ spatio-temporal data sẽ phản ánh hiệu quả của model
- CNN và RNN khá mạnh trong bài toán này vì khả năng học được **hierarchical feature** 

---
Multimodal learning techniques
Multimodal representation
- Được định nghĩa là **complex feature space** chứa **rich** information từ các nguồn data khác nhau, hay còn gọi là một tập hợp các **semantic vectors** trong vùng không gian nhiều chiều.
- Giảm thiểu **Sự dư thừa thông tin** xảy ra **cả giữa các loại dữ liệu khác nhau (inter)** **và trong cùng một loại dữ liệu (intra)**\n\n![](/information_fusion/1-s2.0-S156625352300533X-gr4.jpg)\n\nMultimodal fusion (Traditional methods)
Các chiến lược bao gồm:
- Early fusion: kết hợp các low-level features từ mỗi modality trước khi predict
- Late fusion (hay decision-based fusion): kết hợp các features một cách độc lập từ các modalities khác sau khi predict
- Intermediate fusion: kết hợp các multimodal features từ early và late fusion trước khi predict
**Pros**:
- Early fusion có thể trích xuất được một lượng lớn các thông tin từ dữ liệu không đồng nhất
**Cons**
- Mất tính **consistency** bởi vì các đặc trưng được trích xuất rất nhạy với phương sai 
- Chỉ cần một vector lớn được generated từ fusion có thể dẫn đến dự đoán sai\n\n![](/information_fusion/Graphical-representation-for-the-early-intermediate-and-late-fusions-A-Early-fusion.png)\n\nDeep learning based methods
- Là phương pháp được sử dụng rộng rãi nhất cho **advanced multimodal fusion**
- DBN, AEs, CNN, RNN được sử dụng cho hiệu quả cao
**Cons**:
- Chi phí tính toán cao khi xử lý **large feature spaces**
- Cross-modality learning đạt giới hạn và thông tin nhiễu
- Multimodal data được truy xuất từ **dynamic env** yêu cầu các mô hình phải flexible để đáp ứng được các phương sai ngẫu nhiên của data
---
Hybrid Deep Learning
- Như đã đề cập phần trước, hybrid learning nghĩa là tích hợp nhiều mô hình khác nhau
- Cụ thể là, các kĩ thuật này đạt được nhiều ưu điểm nhờ GPUs, cũng như các kĩ thuật trích xuất đặc trưng thông qua deep learning
- Robust algorithms, bao gồm **genetic artificial neural networks**, có thể phát triển để cải thiện các hệ thống dự đoán, trong trường hợp này, việc kết hợp các phương pháp deep-machine learning có thể được dùng để xây dựng mô kiến trúc chung gọi là **hybrid architecture**
- Các **hybrid architectures** có khả năng trích xuất thông tin đặc trưng theo ngữ cảnh từ **multidimensonal data volumes**, do đó có thể cung cấp nhiều kết quả khả quan hơn **single architecture**
Hybrid learning vs multimodal learning\n\n![](/information_fusion/1-s2.0-S156625352300533X-gr5.jpg)\n\n- Hiện nay, các phương pháp học sâu truyền thống không còn đáp ứng nhu cầu hay khả năng giải quyết các bài toán phức tạp, thay vào đó người ta ưu tiên sử dụng hybrid learning methods
- Việc sử dụng Hybrid learning không chỉ giúp tăng performance của standalone model mà còn giúp giải quyết nhiều bài toán liên quan tới CV
- Khi kết hợp hai hay nhiều các kiến trúc **generic deep learning**, ta sẽ tận dụng được hầu như tất cả các advantages của standalone architectures
- Do vậy, **multimodal fusion techniques** có một tầm quan trọng lớn trong việc kết hợp các **standalone architectures** nhằm khai phá hết sức mạnh của deep learning
Hybridization process
- Quá trình này có thể được hiểu như việc xử lý các kiểu dữ liệu đầu vào thông qua nhiều kiến trúc khác nhau
- Quá trình này có thể chia thành 4 steps:
	- Train/test splits
	- Đưa train set vào hybrid architectures, sau đó kết hợp lại và đưa vào **common contextual space**
	- Train hybrid model để có thể truy xuất được các thông tin có giá trị, cũng như rút ra mối quan hệ **short-long range** giữa các data points
	- Validate model trên test set
Hybrid fusion
- Hybrid fusion khác với multimodal fusion
- Multimodal fusion đề cập tới việc đưa multimdal vào **common contextual space**
- Hybrid fusion nghĩa là việc kết hợp các **standalone architectures** lại thành một kiến trúc duy nhất
- Trong **unimodal learning**, người ta sử dụng **emsemble learning** cho phép kết hợp các model đơn lẻ nhằm tăng độ chính xác khi predict. Ngoài ra, ensemble learning có thể được sử dụng để kết hợp các **multi-level features** tại các mạng khác nhau. Và việc kết hợp các kết quả từ các **standalone model** như vậy được gọi là **output fusion**
- Ngoài ensemble leaning, **voting & meta learning** cũng được sử dụng. **Voting** kết hợp nhiều mô hình nhỏ (weak learners) để tạo ra một mô hình mạnh hơn (strong learner). Trong khi đó **meta learning** là mô hình học **cách để học**, thay vì chỉ học một tác vụ cụ thể.
- Các kĩ thuật ensemble có thể kể đến như:
	- Weighted averaging
		- Đây là kĩ thuật gán trọng số cho từng model, sau đó tính trung bình để dự đoán trên tập final
		- Có thể xem là cách đơn giản nhất để kết hợp nhiều model lại với nhau
		- Việc gán trọng số có thể dựa vào performance của từng model
	- Bagging
		- Là kĩ thuật giúp **giảm variance và giảm noise**
		- Trước tiên sẽ tạo ra các **subset data** nhỏ từ tập dữ liệu ban đầu, sau đó huấn luyện nhiều mô hình trên các tập dữ liệu này rồi kết hợp kết quả của chúng.
		- Tuy nhiên nếu các mô hình không tốt, nó sẽ dẫn đến **high bias** và bị **underfitting**, đồng thời chi phí tính toán cũng khá lơn
	- Boosting
		- Là kĩ thuật giúp mô hình phía sau xử lý các lỗi sai do mô hình phía trước gây ra
		- Khi một mô hình nào đó dự đoán sai một sample data bất kì, ta gán lại trọng số cho sample data đó, mô hình phía sau sẽ tập trung vào việc học sample data khó này
		- Tuy nhiên, kĩ thuật này không được áp dụng nhiều cho các bài toán real-time
	- Stacking
		- Là một kỹ thuật **ensemble learning nâng cao**, trong đó **nhiều mô hình (level 0)** được huấn luyện song song, và một mô hình khác gọi là **meta-model (level 1)** được huấn luyện để **kết hợp kết quả đầu ra của chúng**.
		- Có thể học cách kết hợp tốt nhất thay vì chỉ voting hoặc averaging.
	    - Thường cho **hiệu quả tốt hơn** so với Bagging hoặc Boosting nếu cấu trúc hợp lý.
	    - Phức tạp hơn, cần xử lý cẩn thận (đặc biệt phần tránh **data leakage**).
---
Application-oriented architectures
Hybrid architecture 1: 2D-3D CNNs
Là kĩ thuật kết hợp giữa 2D CNNs: **xử lý ảnh 2 chiều** (ảnh màu RGB, ảnh xám, v.v.) và 3D CNNs: áp dụng trên **dữ liệu 3 chiều**
**Monomodal based**
- Xử lý **chỉ một loại dữ liệu duy nhất**
- Đầu vào: một modal (ví dụ chỉ MRI, hoặc chỉ CT, hoặc chỉ ảnh RGB)
- Dữ liệu đồng nhất, tuy nhiên Có thể **bỏ qua thông tin bổ sung từ các nguồn khác**
**Multimodal based**
- Xử lý **nhiều nguồn dữ liệu khác nhau**, có thể là: hình ảnh từ nhiều thiết bị (MRI + CT), hình ảnh + văn bản (ảnh + caption), RGB + Depth (ảnh màu + ảnh chiều sâu)
- Khai thác **đa chiều thông tin**, tăng độ chính xác
- **Giảm rủi ro bỏ sót** thông tin quan trọng
- Khó thiết kế kiến trúc, đồng bộ hóa dữ liệu phức tạp hơn, cần nhiều tài nguyên tính toán
Hybrid Architecture 2: CNN-RNN
**CNN-RNN** là kiến trúc **lai (hybrid)** kết hợp:
- **CNN (Convolutional Neural Network)** → trích xuất đặc trưng **không gian (spatial features)** từ hình ảnh hoặc khung hình.
- **RNN (Recurrent Neural Network)** → học **thông tin tuần tự (temporal/sequential)** từ chuỗi các đặc trưng đó.
**Monomodal based**
- Chỉ xử lý **một modal** (một kiểu dữ liệu duy nhất), thường là **ảnh/video**.
- Dễ thiết kế hơn multimodal
- Có thể dùng pre-trained CNN cho phần đầu
**Multimodal based**
- Xử lý nhiều modal **kết hợp** — ví dụ: ảnh + text, ảnh + âm thanh, ảnh MRI + tín hiệu sinh học, v.v.
- Một nhánh CNN xử lý ảnh
- Một nhánh RNN xử lý văn bản (hoặc tín hiệu)\n\n![](/information_fusion/Architecture-of-Hybrid-CNN-RNN.png)\n\nHybrid Architecture 3: CNN-DBN
DBN – Deep Belief Network:
- Là mô hình gồm nhiều lớp **Restricted Boltzmann Machines (RBM)** xếp chồng lên nhau.
- **Mạnh về khả năng học không giám sát** (unsupervised feature learning).
- Được huấn luyện theo kiểu "layer-wise greedy pretraining", rồi fine-tune bằng supervised learning.
- Có thể mô hình hóa **phân bố xác suất của dữ liệu** → dùng cho khôi phục ảnh, giảm nhiễu, feature fusion...\n\n![](/information_fusion/Architecture-of-DBN-classifier.png)\n\nKết hợp **sức mạnh trích đặc trưng của CNN** với khả năng **biểu diễn phân phối xác suất sâu và học không giám sát** của DBN để cải thiện hiệu suất trong bài toán học máy.
**Monomodal based**
- Chỉ dùng **một loại dữ liệu** (modal), ví dụ ảnh CT, ảnh gương mặt, tín hiệu EEG…
- CNN giúp trích đặc trưng hiệu quả
- DBN giúp học **biểu diễn ẩn (latent representation)** tốt hơn trong điều kiện thiếu nhãn
- Giảm phụ thuộc vào dữ liệu được gán nhãn
**Multimodal based**
- Dùng **nhiều loại dữ liệu đầu vào** (ảnh + tín hiệu, MRI + PET, RGB + Depth…)
- Mỗi modal có thể qua **CNN riêng hoặc trực tiếp vào DBN**, rồi kết hợp ở tầng fusion
- DBN rất phù hợp để **học đặc trưng đa modal**, do khả năng mô hình hóa phân phối xác suất ẩn.
- CNN học không gian (spatial), DBN học mối liên hệ sâu (deep abstraction) → rất mạnh trong những bài toán dữ liệu ít nhãn.
Hybrid Architecture 4: CNN-DAE
DAE – Denoising Autoencoder
- Là một **autoencoder học không giám sát**, được huấn luyện để:
    - Nhận đầu vào **có nhiễu (noisy input)**
    - Tái tạo đầu ra **gốc, không có nhiễu**
- Giúp mạng học **biểu diễn dữ liệu ổn định, kháng nhiễu**
> DAE = Encoder + Decoder, trong đó Encoder học nén đặc trưng, Decoder học khôi phục đầu ra.

**Mục tiêu**: kết hợp khả năng trích đặc trưng mạnh của **CNN** với **DAE** để:
- Làm sạch dữ liệu (denoising)
- Học biểu diễn tốt hơn trong điều kiện dữ liệu thiếu/ồn
- Tăng khả năng khái quát hoá (generalization)
**Monomodal based**
- CXử lý một **modal duy nhất** như: ảnh X-quang, ảnh màu, ảnh vệ tinh, tín hiệu EEG (dạng ảnh), v.v.
- **Khôi phục ảnh**: CNN-DAE hoạt động như một bộ lọc ảnh sâu học để làm sạch.
- **Tiền xử lý trước phân loại**: ảnh qua CNN-DAE → sau đó dùng cho mô hình phân loại chính.
**Multimodal based**
- Kết hợp nhiều modal: ví dụ ảnh + âm thanh, MRI + CT, ảnh RGB + ảnh sâu (Depth), ảnh + văn bản (text embedding).
- **Multimodal denoising**: làm sạch đồng thời nhiều nguồn dữ liệu
- **Multimodal feature alignment**: học không gian biểu diễn chung từ nhiều modal
- **Data fusion trong y học, ảnh cảm biến, AI mô tả ảnh/video**.\n\nHybrid Architecture 5: CNN-GNN
Kết hợp:
- CNN → học đặc trưng **cục bộ**
- GNN → học **tương quan giữa các đối tượng hoặc vùng trong dữ liệu**
→ Mở rộng khả năng biểu diễn và hiểu ngữ cảnh.
**Monomodal based**
- Xử lý **một loại dữ liệu duy nhất**, như ảnh, video, hoặc chuỗi tín hiệu chuyển đổi thành ảnh.
- GNN bổ sung khả năng học **ngữ cảnh và quan hệ** mà CNN không xử lý tốt.
- Tốt cho ảnh chứa nhiều đối tượng có liên kết (như ảnh MRI, tế bào, ảnh đô thị).
**Multimodal based**
- Xử lý **nhiều loại dữ liệu modal** (ví dụ: ảnh + text, ảnh + sinh học, ảnh + cấu trúc đồ thị domain knowledge)
Các kiến trúc phổ biến:
- **CNN cho ảnh + GNN cho quan hệ**
	- Ảnh qua CNN → GNN xử lý quan hệ giữa các vùng ảnh (từ các modal khác)
- **Multimodal fusion bằng GNN**
	-  Mỗi modal (ảnh, văn bản, biểu đồ…) biểu diễn thành **node**
    -  GNN học mối quan hệ giữa các modal → dùng để ra quyết định
- **Text/image embedding + GNN**
	- CNN xử lý ảnh, BERT xử lý văn bản → GNN kết nối node ảnh–node từ`,
    tags: ["Knowledge Graph", "Deep Learning", "Information Fusion"],
    date: "2025-09-27",
    author: "Minh Hung",
    category: "AI Engineer",
  },
];
