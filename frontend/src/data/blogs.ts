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
  {
    id: "2",
    slug: "text-video-retrieval-evaluation-methods",
    title: "Text-video Retrieval Evaluation Methods",
    excerpt: `Khi bạn gõ “một chú chó đang chạy trên bãi biển” và hệ thống trả về hàng loạt video, làm thế nào để biết mô hình AI thực sự “hiểu” bạn?
Trong thế giới text-video retrieval, những chỉ số như R@1, R@5, R@10, MdR, MnR, và SumR chính là “thước đo niềm tin” – cho thấy khả năng mô hình tìm đúng video trong biển dữ liệu khổng lồ.
Bài viết này sẽ giải thích chi tiết từng metric, minh họa bằng ví dụ dễ hiểu, và chỉ ra tại sao chúng lại trở thành chuẩn mực để đánh giá mọi hệ thống tìm kiếm video bằng ngôn ngữ tự nhiên.`,
    cover:
      "/text_video_retrieval_evaluation_methods/74baa4032f93d8444e0b52e3aacbb1e5278c1f90-921x561.png",
    content: `Trong kỷ nguyên bùng nổ nội dung số, Text-Video Retrieval (truy vấn video bằng ngôn ngữ tự nhiên) đã trở thành một trong những bài toán nóng nhất trong AI. Tưởng tượng bạn gõ: “Cô gái đang chơi đàn piano trong công viên”, và hệ thống phải trả về video chính xác trong hàng triệu clip.\n\nNhưng làm thế nào để đánh giá chất lượng của hệ thống này? 🤔
Câu trả lời nằm ở những chỉ số tưởng chừng đơn giản nhưng cực kỳ quan trọng: Recall@K (R@1, R@5, R@10), MdR, MnR.

## R@K là gì?

Recall@K (R@K) đo lường khả năng tìm đúng video trong top-K kết quả đầu tiên.

- R@1: Phần trăm truy vấn mà video đúng xuất hiện ngay ở vị trí **đầu tiên**
- R@5: Phần trăm truy vấn có video đúng trong top 5
- R@10: Phần trăm truy vấn có video đúng trong top 10

Với text-video retrieval: mỗi câu truy vấn $q$ (một câu mô tả) có tập video đúng $G(q)$ (thường là 1 video đúng). Ta lấy top-K video có điểm tương đồng cao nhất với $q$.Nếu trong top-K có ít nhất 1 video thuộc $G(q)$ ⇒ truy vấn đó “đúng trong top-K”.

Công thức tính R@K:

$$
R@K = \\frac{1}{|Q|}\\sum_{q \\in Q}1\\left[\\min_{g \\in G(q)}rank(g) \\leq K\\right]*100\\%
$$

Trong đó:

- $Q$ là tập các truy vấn
- $G(q)$ là tập các video liên quan đến truy vấn $q$
- $rank(g)$ là vị trí của video $g$ trong kết quả trả về

Ví dụ thực tế:

Giả sử có 5 truy vấn, và vị trí video đúng lần lượt là: 1, 2, 7, 11, 20

- R@1 = 1/5 = 20%
- R@5 = 2/5 = 40%
- R@10 = 3/5 = 60%

Chức năng:

- R@1 cao $\rightarrow$ mô hình cực kỳ chính xác, đúng ngay từ đầu
- R@5, R@10 cao nhưng R@1 thấp $\rightarrow$ mô hình tìm đúng nhưng chưa "tự tin" để xếp lên đầu

Hạn chế của R@K:

- Không phân biệt vị trí trong top-K: Đúng ở hạng 1 và hạng 10 đều được tính như nhau ở K@10
- Không phản ánh toàn bộ ranking: Chỉ biết “có đúng hay không”, không biết mô hình xử lý các kết quả sai ra sao.
- Vì thế, các paper thường kết hợp thêm Median Rank (MedR), Mean Rank (MnR), hoặc nDCG để có cái nhìn đầy đủ hơn.

## MdR - Median Rank là gì?

Median Rank (MdR) là một chỉ số đánh giá hiệu quả xếp hạng trong bài toán retrieval

- Nó đo vị trí trung vị của kết quả đúng trong danh sách xếp hạng.
- Nói cách khác: nếu bạn lấy rank của video đúng cho từng truy vấn, rồi sắp xếp tất cả các giá trị rank này, thì MdR là giá trị ở giữa (median).

Công thức tính MdR:

$$
MdR = median({r_1, r_2, ..., r_n})
$$

Ví dụ thực tế:

Giả sử có 5 truy vấn, với rank của video đúng lần lượt là:

$$
[1,2,7,11,20]
$$

Trung vị của dãy này = 7 ⇒ MdR = 7

Ý nghĩa: với 50% truy vấn, hệ thống xếp đúng video ở vị trí ≤ 7.

Ý nghĩa trong thực nghiệm

- MdR nhỏ → mô hình có xu hướng đưa kết quả đúng lên rất gần đầu danh sách.
- MdR lớn → nhiều truy vấn cần phải cuộn sâu mới tìm thấy video đúng.

Ví dụ trong một paper:

- R@1 = 40%, R@5 = 70%, MdR = 2
  → 50% số truy vấn tìm đúng video ở vị trí ≤ 2, nghĩa là mô hình cực kỳ “sắc bén”.

## MnR - Mean Rank là gì?

Mean Rank (MnR) là một chỉ số đánh giá hiệu quả xếp hạng trong bài toán retrieval

- Nó đo giá trị trung bình của rank của các kết quả đúng trong danh sách xếp hạng.
- Nói cách khác: nếu bạn lấy rank của video đúng cho từng truy vấn, rồi tính trung bình tất cả các giá trị rank này, thì MnR là giá trị trung bình.

Công thức tính MnR:

Cho $N$ truy vấn, mỗi truy vấn $q_i$ có ground-truth với rank $r_i$.

$$
MnR = \frac{1}{N}\sum_{i=1}^{N}r_i
$$

Ví dụ thực tế:

Giả sử có 5 truy vấn, với rank của video đúng lần lượt là:

$$
[1,2,7,11,20]
$$

Trung bình của dãy này = 8.2 ⇒ MnR = 8.2
Ý nghĩa: với 50% truy vấn, hệ thống xếp đúng video ở vị trí ≤ 8.2.

Ý nghĩa trong thực nghiệm

- MnR nhỏ → mô hình có xu hướng đưa kết quả đúng lên rất gần đầu danh sách.
- MnR lớn → nhiều truy vấn cần phải cuộn sâu mới tìm thấy video đúng.`,
    tags: ["Information Retrieval", "Deep Learning"],
    date: "2025-09-28",
    author: "Minh Hung",
    category: "AI Engineer",
  },
  {
    id: "3",
    slug: "a-practiva-guide-to-build-ai-agent",
    title: "A Practiva Guide to Build AI Agent",
    excerpt: `AI Agent là một mô hình AI được huấn luyện để thực hiện các tác vụ dựa trên dữ liệu và kiến thức. Cho phép thực hiện các tác vụ mà không cần phải có sự giám sát trực tiếp từ người dùng.`,
    cover: "/a_practiva_guide_to_build_ai_agent/ai-agent-1.jpg",
    content: `Blog này sẽ hướng dẫn các bạn cách xây dựng một AI Agent oách xà lách.

## What is an agent?

Hầu hết các phần mềm hiện tại có thể cho phép users thực hiện các tác vụ tự động, tuy nhiên các tác vụ này đa số vẫn cần sự tham gia của người dùng và chúng luôn cứng nhắc tuân theo một số các quy tắc nhất định.

Ngược với điều đó, agents là các hệ thống có thể hoàn thành các tác vụ một cách độc lập và dựa vào hành vi của users (users behalf).

Workflow là một chuỗi các các bước cần được thực hiện để đáp ứng mục tiêu của user, chúng có thể là một hành động đơn giản như gửi email, hoặc là một quy trình phức tạp như mua hàng online.

Các ứng dụng mà có tích hợp LLMs nhưng không sủ dụng chúng để điều khiển việc thực thi workflow sẽ không được coi là agents (như chatbots, single-turn LLMs, hoặc sentiment classifier)

Một Agent sẽ có các đặc điểm sau:

- Tận dụng LLMs để quản lý luồn thực thi workflow và đưa ra quyết định. Nó có thể nhận biết được khi nào một workflow đã hoàn thành và có thể tối ưu hóa hành động đó nếu cần thiết. Trong trường hợp thất bại, nó có thể dừng thực thi và chuyển quyền điểu khiển lại cho người dùng.
- Nó có thể truy cập nhiều tools để tương tác với các hệ thống bên ngoài - bao gồm việc thu thập các context để hành động - hoặc tự động chọn ra các tools cần thiết dựa trên trạng thái hiện tại của workflow.

## When should you build an agent?

Việc xây dựng agent (tác tử, hệ thống thông minh tự chủ) đòi hỏi bạn phải suy nghĩ lại cách mà hệ thống đưa ra quyết định và xử lý sự phức tạp.

Không giống như tự động hóa truyền thống, agent đặc biệt phù hợp với những quy trình công việc mà các phương pháp dựa trên quy tắc cứng nhắc, mang tính tất định (deterministic & rule-based) không còn hiệu quả.

Hãy xét ví dụ về phân tích gian lận trong thanh toán.

Một hệ thống dựa trên luật truyền thống hoạt động giống như một danh sách kiểm tra (checklist), chỉ cần giao dịch nào vi phạm tiêu chí định sẵn thì sẽ bị gắn cờ.

Hãy xét ví dụ về phân tích gian lận trong thanh toán.

- Một hệ thống dựa trên luật truyền thống hoạt động giống như một danh sách kiểm tra (checklist), chỉ cần giao dịch nào vi phạm tiêu chí định sẵn thì sẽ bị gắn cờ.

- Ngược lại, một agent dựa trên mô hình ngôn ngữ (LLM agent) lại giống như một điều tra viên giàu kinh nghiệm: nó có thể đánh giá bối cảnh, nhận ra các mẫu tinh vi, và phát hiện hoạt động đáng ngờ ngay cả khi không vi phạm quy tắc rõ ràng nào.

Khi bạn đánh giá những nơi mà agent có thể mang lại giá trị, hãy ưu tiên các quy trình công việc vốn trước đây khó tự động hóa, đặc biệt là những chỗ mà các phương pháp truyền thống thường gặp trở ngại hoặc không hiệu quả.

## Agent design foundations

Hầu hết một agent sẽ có các thành phần sau:

- **Model**: LLM là một mô hình ngôn ngữ được sử dụng để xử lý các yêu cầu của người dùng và đưa ra quyết định.

- **Tools**: Các chức năng bên ngoài hoặc APIs mà agent có thể sử dụng để tương tác với các hệ thống bên ngoài.

- **Instruction**: Một chuỗi các bước cần được thực hiện để đáp ứng mục tiêu của user.

\`\`\`python
weather_agent = Agent(

    name = "Weather agent",

    instructions = "You are a helpful agent who can talk to users about the weather.",

    tools = [get_weather],
)
\`\`\`

## Selecting your models

Các models khác nhau có các thế mạnh và hạn chế khác nhau.tùy thuộc vào độ phức tạp, độ trễ, chi phí của tác vụ.

Không phải tác vụ nào cũng yêu cầu sử dụng model thông minh khác - một tác vụ như truy xuất thông tin đơn giản, phân loại văn bản có thể được thực hiện bởi một model nhỏ hơn, nhanh hơn, trong khi các tác vụ khó hơn như quyết định xem có nên chấp nhận một khoản thanh toán hay không thì cần một model lớn hơn.

Tóm lại, các nguyên tắc chọn model đơn giản như sau

- Thiết lập bài đánh giá (evaluation) để xác định mốc chuẩn ban đầu về hiệu suất.
- Tập trung đạt được mức độ chính xác mong muốn bằng cách sử dụng những mô hình tốt nhất hiện có.
- Tối ưu chi phí và độ trễ bằng cách thay thế các mô hình lớn bằng mô hình nhỏ hơn khi có thể.

## Difining tools

Các công cụ (tools) giúp mở rộng năng lực của agent bằng cách sử dụng API từ các ứng dụng hoặc hệ thống nền tảng. Đối với các hệ thống cũ (legacy systems) không có API, agent có thể dựa vào các mô hình computer-use để tương tác trực tiếp với ứng dụng/hệ thống thông qua giao diện web hoặc ứng dụng, giống như cách một con người thao tác.

Mỗi công cụ (tool) cần có một định nghĩa chuẩn hóa, giúp thiết lập mối quan hệ linh hoạt và nhiều-nhiều (many-to-many) giữa công cụ và agent.

Các công cụ được tài liệu hóa đầy đủ, kiểm thử kỹ lưỡng, và có thể tái sử dụng.

## Configuring instructions

Hướng dẫn chất lượng cao là yếu tố thiết yếu cho mọi ứng dụng sử dụng LLM, nhưng lại càng quan trọng hơn đối với agents. Hướng dẫn rõ ràng sẽ giúp giảm sự mơ hồ, cải thiện khả năng ra quyết định của agent, từ đó thực hiện workflow trôi chảy hơn và giảm thiểu lỗi.

### Best Practices for Agent Instructions

1. Use existing documents (Tận dụng tài liệu sẵn có)

   Khi tạo các quy trình (routines), hãy dùng các tài liệu hướng dẫn vận hành, kịch bản hỗ trợ, hoặc chính sách hiện có để chuyển thành routine thân thiện với LLM.

2. Prompt agents to break down tasks (Yêu cầu agent chia nhỏ nhiệm vụ)

   Từ những nguồn tài nguyên dày đặc, hãy chia thành các bước nhỏ, rõ ràng.

3. Define clear actions (Xác định rõ hành động)

   Đảm bảo mỗi bước trong routine tương ứng với một hành động hoặc output cụ thể.

4. Capture edge cases (Bao quát các trường hợp ngoại lệ)

   Trong thực tế, người dùng có thể đưa thông tin thiếu hoặc hỏi câu bất ngờ. Một routine mạnh mẽ phải dự đoán các tình huống phổ biến này và đưa ra hướng dẫn xử lý với conditional step (bước điều kiện).

## Ochestration

Khi đã có các thành phần nền tảng sẵn sàng, bạn có thể bắt đầu xem xét các mẫu điều phối (orchestration patterns) để giúp agent thực thi workflow hiệu quả hơn.

Mặc dù có thể rất hấp dẫn khi lao ngay vào việc xây dựng một agent hoàn toàn tự trị với kiến trúc phức tạp, nhưng trên thực tế, khách hàng thường đạt được thành công cao hơn khi áp dụng cách tiếp cận từng bước (incremental approach).

## Single-agent systems

Một agent đơn lẻ có thể xử lý nhiều nhiệm vụ bằng cách bổ sung dần các công cụ (tools), giúp giữ cho độ phức tạp ở mức kiểm soát được và đơn giản hóa việc đánh giá, bảo trì.

Mỗi công cụ mới được thêm vào sẽ mở rộng khả năng của agent, mà không buộc bạn phải sớm xây dựng hệ thống đa agent phức tạp.

## Guardrails

Các guardrail (lan can bảo vệ) được thiết kế tốt sẽ giúp bạn quản lý rủi ro về quyền riêng tư dữ liệu (ví dụ: ngăn rò rỉ system prompt) hoặc rủi ro về uy tín thương hiệu (ví dụ: đảm bảo mô hình phản hồi đúng với định hướng thương hiệu).

Bạn có thể thiết lập guardrail để xử lý những rủi ro đã biết trong use case của mình, và bổ sung thêm guardrail mới khi phát hiện ra các lỗ hổng mới.

Guardrail là thành phần thiết yếu trong mọi triển khai dựa trên LLM, nhưng cần được kết hợp với các biện pháp bảo mật khác: xác thực & phân quyền mạnh mẽ, kiểm soát truy cập nghiêm ngặt, và các chuẩn an ninh phần mềm.

Hãy coi guardrail như một cơ chế phòng thủ nhiều lớp: một guardrail đơn lẻ thường không đủ, nhưng khi kết hợp nhiều guardrail chuyên biệt, bạn sẽ tạo ra agent bền vững hơn.

Ví dụ minh họa (theo sơ đồ): kết hợp LLM-based guardrails, rules-based guardrails (như regex), và OpenAI Moderation API để kiểm duyệt input từ người dùng.
`,
    tags: ["AI Agent", "Deep Learning", "AI Engineer"],
    date: "2025-09-29",
    author: "Minh Hung",
    category: "AI Engineer",
  },
];
