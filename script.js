document.addEventListener("DOMContentLoaded", () => {
	const contentDiv = document.getElementById("content");
	const dynamicMenu = document.getElementById("dynamicMenus");

	const pages = {
		home: ` <h1>Home</h1> 
		        <p>Welcome to my blog!</p><br/>
				<p class="textAlign">This blog is a simple project featuring my engineering writing course articles. As a Computer Engineering major, I am passionate about the applications of my field of study and wanted to share these writings of mine reflecting this interest.</p> 
				<p class="textAlign">This web app is a Single Page Application (SPA), coded using HTML, CSS, and JavaScript.</p>
				<div class="pendulum">
  					<div class="pendulum_box">
    					<div class="ball first"></div>
      					<div class="ball"></div>
      					<div class="ball"></div>
      					<div class="ball"></div>
      					<div class="ball last"></div>
  					</div>
				</div>
				` ,
		insight: `
				<h1>Engineering Magazine Article</h1> 
				<h2>Hey ChatGPT, Can you...?</h2>
				<p class="textAlign">ChatGPT took the whole world by storm when the ChatGPT-3 model was first introduced. Trained on terabytes of data, OpenAI gifted us a new work tool with generative AI. Today, all kinds of apps are implementing AI plugins. Generative AI, or Gen AI is becoming an important tool for many professionals and is impacting many industries. A survey by McKinsey shows “that AI adoption has more than doubled over the past five years” [1]. Many can see AI becoming a general-purpose technology with impacts like previous revolutions with electricity and the internet. AI is growing as people and companies are discovering more applications for everyday life and work. Like many things in this world, there are divided views on this new revolution. Some are considering AI as rivals and a threat for human job market, while many others are redefining their workflow to work with the AI for their benefit. </p>
			  	<img src="illuminImg1.jpg" alt="AI" class="imageSize"/>
				<p class="textAlign">One point of discussion has risen on the impact of generative AI on human creativity and art production. More specifically, we are exploring the impact of incorporating generative artificial intelligence into the human creative workflow, in contexts such as text-to-image generative AI. Gen AI is reshaping workflow in the creativity field, as it transforms creative arts, by enabling new forms of artistic expression and encouraging human-AI collaboration to enhance productivity and creativity. However, this raises concerns regarding diversity and authorship, and poses challenges for careful management to balance human and AI roles.        </p>
				<h3>Deep dive into the terms: What is AI? What is generative AI? What is ChatGPT?</h3>
				<p class="textAlign">Before we dive into this modern companionship, let us simplify the basics. You have probably already come across and interacted with AI. Siri, Alexa, Google Assistant, and Bixby are all service chatbots based on AI technology. AI, Artificial intelligence, is quite what it sounds like - “the practice of getting machines to mimic human intelligence to perform tasks” [1]. To understand the breakthrough behind generative AI (and thus ChatGPT), we must understand some machine learning. There are different machine learning models to teach a machine. The classic one is a predictive model for observing and classifying patterns. A simple example would be to provide several images of cats, have the program identify patterns in the images, and train with random images to match with the description of cat based on the provided cat images.</p>
				<p class="textAlign">Generative AI is different. What it uses is text-based ML models which can create rather than just perceive and classify. These models won't just identify cat images but can create an image of a cat for us. In simple terms, Gen AI is something that “can learn from existing artifacts to generate new, realistic artifacts (at scale) that reflect the characteristics of the training data but don't repeat it. It can produce a variety of novel content, such as images, video, music, speech, text, software code and product designs” [2]. Another term for models used for Gen AI is AI foundation models. Generative AI utilizes AI foundation models, trained on a broad set of unlabeled data combined with enormous computing power. These trained models are in essence prediction algorithms that seem like new creations upon interaction. </p>
				<p class="textAlign">The foundation model that drives ChatGPT is called generative pretrained transformers. This powerful model is in the process of being used to automate, autonomously execute businesses, create new art, and much more! We won't dive into the specifics of this model and shift gear to focus on the benefits of generative AI for visual arts creation, as well as the major limitations and concerns. </p>
				<img src="genTools.png" alt="AI" class="imageSize"/>
				<h3>How is your new artistic partner?</h3>
				<p class="textAlign">Imagine yourself as an artist and you are trying to use AI for creating your artwork. Will this help you be more creative? Several studies have shown that generative AI can increase artistic productivity and human creativity, at least for some, while posing some limitations regarding diversity in generated content. </p>
				<p class="textAlign">A study done by the Department of Information Sciences at Boston University reveals that the adoption of generative AI, particularly text-to-image systems, significantly enhances human creative productivity by 25%. AI gives us the power to explore new ideas at the creative frontier and expand the “universe of artifacts.” In a future of human-AI collaboration in creative domains, “humans' ideation proficiency and a refined artistic filter” may become the focal skills required [3]. When using text-to-image AI, the ability to generate artworks with specific prompting is a relevant skill in demand. </p>
				<p class="textAlign">However, concerns are raised about the potential saturation of creative fields with generic content. That is, AI systems trained on outdated knowledge banks run the risk of generating more generic content at a mass scale overtime [3]. This concern is particularly relevant as technology firms and policymakers must be sensitive to the potential consequences of such technologies in creative fields.</p>
				<p class="textAlign">A similar study was conducted by University College London and University of Exeter to investigate the potential of Gen AI to enhance creativity and ideation in writers. Participants were randomized into three experimental conditions: humans only, human with 1 Gen AI idea, and human with 5 Gen AI ideas. The creativity of the writers and stories were measured with several parameters and characteristics. The results showed that Gen AI enhances the creativity of stories, particularly for less creative writers. Writers who were inherently less creative experienced substantial improvements in the creativity and emotional characteristics of their stories when using GenAI ideas. On the other hand, highly creative writers were minimally affected by the availability of GenAI ideas. Their stories were consistently evaluated highly, indicating that GenAI had little impact on their already high levels of creativity and writing quality [4]. </p>
				<p class="textAlign">The study also found that the availability of GenAI ideas led to a reduction in the diversity of stories. GenAI-enabled stories were more like each other than stories created by human writers alone. If the publishing industry were to embrace more GenAI-inspired stories, the produced stories could become less unique in aggregate, potentially impacting diversity in literature [4].</p>
				<img src="aiArt.jpg" alt="AI" class="imageSize"/>
				<h3>The New Music Director</h3>
				<p class="textAlign">In an AI Song Contest held by VPRO, team participants were surveyed regarding their experience of co-creating music with AI tools in 2020. The teams had used Gen AI in their creative process in multiple stages. In simple words, this approach involved generating a large quantity of musical snippets from models and then manually organizing them. Teams also used a range of strategies to direct the generation, such as algorithmically ranking the samples. Additionally, they used model pipelining, feeding the output of one model into the input of another model. This allowed for alignment between lyrics and melody. For instance, one model, like ChatGPT would produce the lyrics, and then those lyrics will be fed to another model for producing melody fitting with the lyrics. Furthermore, some teams actively engaged with the raw, AI-generated material, incorporating as much of the output as possible to make the music less repetitive and more engaging [5].</p>
				<p class="textAlign">The experience of the participants emphasizes the need to design machine learning-powered music interfaces that are more decomposable, steerable, interpretable, and adaptive. Users faced challenges in juggling the dual processes of creative and technological iteration cycles showing a lot of scope for improvement with AI in the musical field. The findings reflect a need for interfaces that empower artists to more effectively explore how AI can extend their personal expression [5].</p>
				<h3>Main Ethical Concerns</h3>
				<p class="textAlign">The use of AI in the creative sector raises several ethical considerations, such as developing bias and determining authorship, which are crucial to address. The potential for AI systems to develop bias, even when initially trained with balanced data, necessitates periodic retraining to mitigate bias. This is particularly important in the creative sector to ensure fair representation and avoid perpetuating stereotypes. Additionally, determining authorship of AI-generated creations and addressing issues of piracy and originality are ethical concerns that require clear definitions and protections for creators [6].</p>
				<p class="textAlign">The legal and ethical challenges related to authorship are multifaceted. Determining who can claim ownership over model outputs is a significant challenge. This requires understanding the creative contributions of a system's users versus other stakeholders, such as the system's developers and creators of the training data. Moreover, the reliance on training data raises questions about how copyright law should treat training data. This includes understanding how the data is sourced, how it influences the outputs, and how to determine authorship. As we can this isn't a simple issue to resolve and addressing these challenges requires interdisciplinary research, including technical, social science, and legal research [7].</p>
				<h3>AI in the Broader Media Ecosystem</h3>
				<p class="textAlign">Let us look at these concerns from a big-picture view. Generative AI has the potential to have significant implications on the broader media ecosystem such as misinformation, decrease in collective attention span, and change in aesthetic views. Firstly, Generative AI can create synthetic media that could be used to spread misinformation like creating photorealistic synthetic media that may undermine trust in authentic media and increase threats of fraud. The role of platform interventions, such as tracking source provenance and detecting synthetic media, is crucial for governance and building trust in the media ecosystem. Secondly, the explosion of AI-generated content may decrease collective attention spans, potentially hampering society's ability to collectively discuss and act in important arenas such as climate and democracy. Additionally, the aesthetics of generative AI outputs may affect artistic outputs and cultural norms. Understanding the impact of generative AI on aesthetics and culture is crucial because Gen AI could potentially increase the overall diversity of artistic outputs by expanding the set of creators who engage with artistic practice. However, it also raises questions about how aesthetic and cultural norms and biases embedded in the training data might be reflected and amplified, potentially decreasing diversity [7]. Addressing these implications requires a comprehensive review and tracking of progress and changes led by Gen AI.  </p>
				<h3>Personalizing AI and the Art of Prompting</h3>
				<p class="textAlign">While there are many solutions and counterarguments spewing about tackling concerns, one interesting solution that I have come across is developing personalized AI models for artists, which train on smaller datasets for their purposes. Personalized generative AI models in visual arts can help artists regain control, enhance their sense of ownership over the results, and realize their creative visions. There are several ways this can be approached. </p>
				<p class="textAlign">Some artists train generative models from scratch, allowing them to have complete control over the training process and the resulting outputs. Alternatively, artists may fine-tune large or personally trainable models, enabling them to modify existing models to better suit their specific creative needs. In a more interesting domain, separate from dataset manipulation, artists carefully navigate a generative space, for example, by using prompts, to shape or influence the generation. This approach allows them to explore and guide the model's outputs based on their creative intentions. Each of these approaches offers means of control over the results and align with own artistic vision [8].</p>
				<p class="textAlign">Small datasets can be highly beneficial for artists when training models for visual arts for several reasons. The of personalization and control is crucial for artists who want to create unique and distinct visual outputs. Training on small datasets can be more efficient in terms of time and computational resources as well. Artists can adapt and fine-tune models to suit their evolving creative needs and allow them to explore different aesthetics. This adaptability is essential in the dynamic and iterative process of artistic creation. Artists can explore different aesthetics by training models on small, carefully curated datasets. In summary, this “small dataset” mindset empowers artists to personalize, experiment, and adapt models to their specific artistic requirements, providing them with greater creative agency and control over the outputs [8].</p>
				<p class="textAlign">Aside from using personalized datasets and fine-tuning existing datasets, there is another technique of prompt writing. Looking back towards the beginning, once again imagine yourself as an artist working with AI. You are not mechanically creating the art. The work is generated by the AI. So, what would we call ourselves? A new field is emerging for this skill. As defined by Amazon Web Services, prompt engineering “is the process where you guide generative artificial intelligence (generative AI) solutions to generate desired outputs” [9]. When we talk to ChatGPT, Gemini, or another Gen AI model, it feels very human-like. However, even generative AI is essentially based on predictive models. The generated results are more of less predictions and combinations of trained data - whether the output be in text, images, video, or other form of multimedia. When you prepare your dough or batter for baking, and wait for the desired result, what eventually comes out of the oven is your accuracy in the preparation of ingredients and how well you followed the procedure. Prompt engineering follows a similar principle - the AI generates based on how you frame your words. </p>
				<h3>Bigger Gen-Future</h3>
				<p class="textAlign">We have a long way to go with generative AI and it will continue to touch our lives. With rising fields such as prompt engineering and increasing industries wanting to get a sizeable piece of this technology in their enterprise, there are more changes to come and more concerns that will come entailing. However, industries will put forth their best effort to push for potential solutions and bring the best of society. Generative AI will lead a new era and revolution for artists and creative workers, as they go beyond their boundaries and idea foundation. There is much more to come with the collaboration of human creativity and Gen AI power.  </p>
				<h3>Suggested Further Research</h3>
				<p class="textAlign">Introduction to Gen AI by Google Cloud - https://www.youtube.com/watch?v=cZaNf2rA30k</p>
				<p class="textAlign">Generative AI: The Future of Creativity by OpenAI - https://www.youtube.com/watch?v=0jspaMLxBig</p>
				<p class="textAlign">What is Generative AI by NVIDIA Blogs - https://www.nvidia.com/en-us/glossary/generative-ai/</p>
				<h3>References</h3>
				<p class="references"> [1]	“What is Generative Ai?,” McKinsey & Company, https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-generative-ai (accessed Jun. 10, 2024). <br/> [2]	“Generative AI: What is it, tools, models, applications and use cases,” Gartner, https://www.gartner.com/en/topics/generative-ai (accessed Jun. 11, 2024). <br/> [3] E. Zhou and D. Lee, “Generative AI, human creativity, and art,” Social Science Research Network, Jan. 2023, doi: 10.2139/ssrn.4594824.<br/> [4] A. R. Doshi and O. Hauser, “Generative artificial intelligence enhances creativity,” Social Science Research Network, Jan. 2023, doi: 10.2139/ssrn.4535536. <br/> [5] C.-Z. A. Huang, H. V. Koops, E. Newton-Rex, M. Dinculescu, and C. Cai, “Human-AI co-creation in songwriting,” Oct. 11, 2016. https://program.ismir2020.net/poster_5-11.html <br/> [6] N. Anantrasirichai and D. R. Bull, “Artificial intelligence in the creative industries: a review,” Artificial Intelligence Review, vol. 55, no. 1, pp. 589-656, Jul. 2021, doi: 10.1007/s10462-021-10039-7. <br/> [7] Z. Epstein et al., “Art and the science of generative AI,” Science, vol. 380, no. 6650, pp. 1110-1111, Jun. 2023, doi: 10.1126/science.adh4451. <br/> [8] Justin Weisz, “HAI-GEN 2024 - Towards Personalizing Generative AI with Small Data for Co-Creation,” YouTube, Apr. 09, 2024. https://www.youtube.com/watch?v=1sMnHdH_A6A (accessed Jun. 11, 2024). <br/> [9] “What is Prompt Engineering? - AI Prompt Engineering Explained - AWS,” Amazon Web Services, Inc. https://aws.amazon.com/what-is/prompt-engineering/ <br/></p>
				`,
		ethics: `
				<h1>Engineering Ethics Article</h1> 
		        <h2>How Engineers can (and are) Addressing Barriers to Solar Technologies</h2>
				<p class="textAlign">Today, solar panels can be found in television remotes, outdoor lightings, house and stadium rooftops, and even cars. The massive expansion of solar energy is not only opening doors to achieving major environmental goals but reducing the numbers on bills for many people. Solar energy has come a long way from 1839 when the photovoltaic effect was first discovered, long before the celebration of the first Earth Day in 1970. The photovoltaic effect is a process that produces a voltage when exposed to light or radiant energy. In the realm of solar energy, we are looking at the radiation emitted from the sun [1]. In a nutshell, solar technologies “convert sunlight into electrical energy either through photovoltaic (PV) panels or through mirrors that concentrate solar radiation. This energy can be used to generate electricity or be stored in batteries or thermal storage.” A very simplified model of this process is shown in Figure 1 below. The amount of sunlight that reaches Earth's surface in an hour and half is enough to handle the entire world's energy consumption for a full year [2]. If the sun has so much power, why isn't solar energy everywhere yet?</p>
				<figure>
  					<p><img src="Picture1.jpg"
    					alt="Solar Technology">
  						<figcaption><b>Figure 1. Solar Energy and the Photovoltaic Effect.</b> Photons from the sun's radiation are absorbed by the solar panels which convert it to energy, that eventually gets converted and supplied as AC (or DC) electricity. [3]</figcaption>
				</figure>
				<p class="textAlign">There are many views to look at this question, from scientific to political, but one view - the engineering ethical view - addresses the issues of efficiency and affordability in being major barriers for the expansion of solar power. Inventors have been advancing solar technology and improvements in efficiency and aesthetics keep coming. The costs of solar systems have fallen dramatically, and residential adoption of solar energy has increased, with “more than 2 million solar energy systems currently operating across the United States as of 2019.” However, according to Solar Future Studies done by the U.S. Department of Energy, only 31% of solar adopters came from households that earned less than the area median income. Additionally, certain underprivileged groups have exhibited about 69% less rooftop photovoltaic adoption, one of the dominant forms of solar technologies. Even though maintenance costs of solar panels are dropping, the upfront cost of installation can still pose a major barrier. Affordability is not the only issue. Structural effects such as unstable rooftops, locations with low sun exposure, and homeowners being renters or living in apartments are all reasons stopping many people from using solar technologies [4]. Engineers have an ethical duty for making their services equitable, and thus to make solar energy accessible against affordability, inadequate roof conditions, low sun exposure, and rental home and apartment barriers, and can be done so by using cheaper materials, making solar energy technologies more efficient and flexible, and making changes in infrastructures and careers in the engineering world.</p>
				<p class="textAlign">Before looking at these barriers (and their potential solutions), let us examine why engineers should have a view in this. Engineering is an important and well-known profession, known at its heart for solving problems. Engineering has touched every aspect of our lives, and according to the National Society of Professional Engineers, it is in the very heart of this field to serve and protect public health, safety, and welfare. This includes the fact that the services engineers provide should be fair and provided with equity. Engineers' professional obligations include striving “to serve the public interest,” and therefore, should “work for the advancement of the safety, health, and well-being of their community” [5]. It is therefore an obligation for engineers to make solar energy more accessible, efficient and flexible for more people to use. Giving more people access to solar energy, can not only helps financially, but the low cost of use can help lower income households use more electricity for air conditioners and heaters that in the long-term improve their health to combat adverse weathers such as extreme heat waves and freezing temperatures [4]. There are several ways engineers can approach this, starting from finding cheaper materials for building solar technologies and more efficient solar cells that can absorb more energy, and improving long-term stability of the solar cells.  </p>
				<p class="textAlign">Currently, solar panels can cost in the range from $20,548 to $30,666, and some money can be saved by building solar panels from scratch with selected cheaper materials, saving maybe around $5000 [6, 7]. However, in the manufacturing process the cost of labor and overhead can significantly add up, and for self-builders, the cost of time and labor can add up and lead to more expenses. There are many costs associated with solar manufacturers from raw materials, production process, labor and overhead, transportation, marketing, certifications, tariffs, taxes, and the list goes on. So, it is only reasonable that even the cheapest solar options today are still quite expensive for low-income and some middle-income households, who are probably in need of technologies like solar energy the most [8]. While there are many places in the manufacturing, marketing, and regulatory processes where engineers can become more efficient (possibly infinite), this discussion will present some engineering solutions, including the research and use of inexpensive material for cheaper and more efficient solar cells. </p>
				<p class="textAlign">Engineers at Stanford University are one of the many organizers filling this ethical role. Stanford Professor Mike McGehee, graduate student Colin Bailie, and many other engineers from Stanford are progressing to develop a solar cell stacking technique that can increase solar cell efficiency by 50%. According to the Stanford professor of materials science and engineering, silicon photovoltaics have been stuck at a 25% power conversion efficiency for several years, and “one cost-effective way to improve efficiency is to build a tandem device made of silicon and another inexpensive photovoltaic material.” In this device, silicon is perfect for the bottom cell, and perovskites have come along as a good material for the top cell. With this double layer, you get a solar device that is way more cost effective and efficient than either material-based solar cell would be on its own, and it leverages existing silicon factories, reducing costs [9]. However, the stability and degradation with heat of perovskites had been a potential draw back until, Purdue's chemical engineering researchers “created new, multifunctional ligands that improve the charge transfer, power conversion capability and long-term stability of perovskite solar cells” [9, 10].</p>
				<p class="textAlign">Purdue researchers developed new ligands that enhance charge transfer, power conversion, and stability of perovskite solar cells. The ligands improved power conversion efficiency to nearly 25% compared to 20% of the perovskite cells alone without ligands and extended operational lifetime to over 2400 hours at 65 degrees Celsius which is four times longer than without the ligands. The Purdue team aspires to achieve more than 25% efficiency and over 10000 hours of operational lifetime, and further apply the ligands to larger-area solar modules [10]. Parallelly, the Stanford team aims to achieve higher efficiency with the tandem devices in the next five to ten years, with more stability and lower costs [9]. Moreover, a U.S. National Science Foundation (NSF) researcher is working towards solar cells that can be used in more everyday items such as computer bags, clothing, and walls. Jinsong Huang, an assistant professor of mechanical and materials engineering at University of Nebraska-Lincoln has a goal to “ensure that almost any surface, including windows, walls, and even computer bags and clothing, will be specially treated and have the ability to tap into the power of the sun, providing energy that is just as efficient and much less expensive than the solar panels in use today.” Professor Huang aims to make solar energy by using organic polymer solar cells instead of traditional silicon cells. His team is enhancing efficiency by adding a layer of ultrathin ferroelectric polymer, which increases the internal electric field and generates more electricity. Organic polymer solar cells are cheaper and can be applied to various surfaces, including clothing and building materials [11]. Professor Huang's research further presents a key idea on how the issue of bringing solar power to rental homes can be thought about. </p>
				<p class="textAlign">There is not much rental homeowners and apartment owners can do if their landlords or management facilities don't permit for solar installations. But portable solar panels have become progressively cheaper and more efficient (thanks to engineers), making them a convenient power source for use in apartments or rental homes. They can be set up on windowsills, balcony railings, and banisters, with foldable kits available for easy storage in small spaces. An example of such solar panels can be seen in Figure 2. These systems generate enough electricity to charge devices and run small appliances. One of the main issues here is that portable inverters and storage systems can be expensive, with smaller systems having a higher cost per watt (again another cost barrier) [12]. The problem of inefficient energy storage in solar technologies is not limited to portable solar panels.</p>
				<figure>
  					<p><img src="Picture2.jpg"
    					alt="Solar Technology">
  						<figcaption><b>Figure 2. Ways Renters can Generate their own Solar Energy.</b> Solar panels have ingeniously been attached to a balustrade, demonstrating nontraditional ways solar technologies can be utilized by those who cannot accommodate roof installations. [12]</figcaption>
				</figure>
				<p class="textAlign">Researchers at Massachusetts Institute of Technology have developed a device that improves solar panel efficiency by using wavelengths of light that conventional photovoltaic cells cannot capture, significantly improving solar power usage, providing a renewable option when traditional solar methods are insufficient. The device uses multi-walled carbon nanotubes and silicon/silicon dioxide photonic crystals to convert sunlight into heat and then back into light, enhancing energy conversion. Initial tests showed a 3.2% efficiency, with potential to reach 20% [13]. Furthermore, Williams Engineering has led a discussion proposing that engineers, architects, designers, and even aspiring (current or future) homeowners need to consider structural impact, existing buildings, new construction, and reinforcement methods for more effective solar panel installations in different types of houses. Installing roof-mounted solar panels increases the load on the roof and building, requiring careful consideration of the existing structural system. A structural review is essential for existing buildings to determine if they can support the additional load or need reinforcement. Designing new buildings with the capacity to support solar panels from the start can reduce future upgrading costs. In the case of already existing buildings that need reinforcements, strengthening the roofing system can involve adding new joists or reinforcing existing members to increase load-carrying capacity [14]. Along with building structure, the angles and tilts of the solar panels can have a huge impact on efficiency to optimize sunlight exposure for location.</p>
				<p class="textAlign">The energy output of a PV panel varies with the angle at which sunlight strikes it, affecting its efficiency. Solar tracking systems designed by engineers help optimize the amount of sunlight that hits a PV panel over time (day, month, year). One real example is developed by SunPower Corporation, a German company that specializes in PV power systems, which designed North America's largest PV power plant at Nellis Air Force Base in Nevada. Being one of the most efficient PV panels in the world, the dual-axis PV tracking system uses small mirrors to focus sunlight on high-efficient cells. The power plant has an east-west single-axis tracking system, meaning that “the panels rotate from east to west throughout the day to follow the sun and optimize panel efficiency. Because of this tracking system, these panels produce 30% more power than they would if they were fixed facing south.” Whether a panel is fixed in one direction or integrated with a single- or double-axis tracking system, it is important to know the effect the angle of sunlight hitting the panel has on its overall efficiency [15]. There are many ways engineers can do their ethical duty to help provide affordable and efficient solar technologies. Nevertheless, engineers will have to bring bigger infrastructural changes to unleash the full potential. </p>
				<p class="textAlign">While big infrastructural changes are not just in the hands of engineers, there is much that can be done. The emergence of new tech fields and transferring of skills have been seen whenever the engineering world has changed to adapt to new innovations and challenges. The New England Institute of Technology has introduced “Renewable Energy Engineering.” Just like how climate change inspired environmental engineering field and the recent advancement of prompt engineering in generative AI is emerging, renewable energy engineering “focuses on designing and implementing renewable energy systems that can provide clean, efficient, and reliable power.” Renewable energy engineers also conduct energy audits and ensure compliance with environmental regulations. The demand is growing, and of course, high installation costs, power availability, and maintaining compliance with regulations are common challenges in the field [16]. As engineers, it will again be their ethical duty for public service to keep sustainability in action.</p>
				<p class="textAlign">In the research studies discussed, we saw works of Materials Science and Engineering and the Chemical Engineering departments to name a few. Many fields can contribute to the growth of this renewable source. For instance, mechanical engineers can work in every stage of renewable development and distribution from developing methods that lower cost of manufacturing silicon for solar panels to developing new storage technology such as solar fuel for long duration energy storage [17]. Regarding electrical engineers, EMT Solar and Roofing states that “electrical circuits are the lifeblood of any solar system. For solar experts from the industrial engineering field, know that “mathematical models are required to design quality-controlled manufacturing and information systems.” The specialty field of any engineer will most probably help determine where in the supply chain process of solar engineering they will operate [18]. The growing demand for solar engineers showcases the professional obligation on current and future engineers to improve solar technologies. </p>
				<p class="textAlign">Solar installations are increasing, but there remain barriers to implementing these technologies. With the demand increasing, it is only natural for engineers to see this as their professional obligation and ethical duty to make this technology more efficient and flexible. The barriers of affordability, upfront installation costs, roof conditions, low sun exposure, and rental and apartment homeowners, need to be addressed, and there are many ongoing developments that need to be pushed for commercial viability and be given more access to. Things like production and installation cost remain a major obstacle despite many advancements, however, the ambitious goals of engineers in research will hopefully bring solutions for these issues. Many studies on inexpensive materials, long-term stability of solar cells, increased capacities of solar powered storage, portable solar systems, and solar tracking methods are in progress for a better access to the solar world. Engineers are doing (and should continue to do) their ethical duty in the emerging fields of solar engineering. It might not be too long, when to charge a phone, you can simply slip it in your pocket or backpack, and head out to the sun. You get your phone charged and maybe some Vitamin D! The fast innovation of solar technologies today is a clear example of engineers serving the public good with their vast knowledge, maintaining the respect of this valuable field.  </p>
				<h3>References</h3>
				<p class="references"> [1] E. C. and D. L. T. U. S. P. and T. Office, “A brief history of solar panels,” Smithsonian Magazine, Nov. 15, 2023. [Online]. Available: https://www.smithsonianmag.com/sponsored/brief-history-solar-panels-180972006/ <br/> [2] “How does solar work?,” Energy.gov. https://www.energy.gov/eere/solar/how-does-solar-work <br/> [3] BriggsAgency, “Does home insurance cover solar panels? - Briggs Agency Inc,” Briggs Agency Inc, Apr. 28, 2023. https://briggsagency.com/does-home-insurance-cover-solar-panels/ <br/> [4] National Renewable Energy Laboratory, “Solar futures study,” 2021. [Online]. Available: https://www.energy.gov/sites/default/files/2021-09/Solar%20Futures%20Study.pdf <br/> [5] “Code of Ethics | National Society of Professional Engineers.” https://www.nspe.org/resources/ethics/code-ethics <br/> [6] A. Ogletree, “How much do solar panels cost? A Full-Breakdown of associated costs and factors in 2024,” Forbes Home, Jul. 02, 2024. [Online]. Available: https://www.forbes.com/home-improvement/solar/cost-of-solar-panels/ <br/> [7] T. Jude, “DIY solar panels: Are they worth it? (2024 guide),” This Old House, Jul. 10, 2024. https://www.thisoldhouse.com/solar-alternative-energy/reviews/diy-solar-panels <br/> [8] D. Cao, “Cost breakdown of a solar panel: From manufacturing to market,” SolarCtrl, Feb. 27, 2024. https://www.solarctrl.com/blog/cost-breakdown-of-solar-panel-from-manufacturing-to-market/ <br/> [9] C. D. Bailie et al., “Semi-transparent perovskite solar cells for tandems with silicon and CIGS,” Energy & Environmental Science, vol. 8, no. 3, pp. 956-963, Jan. 2015, doi: 10.1039/c4ee03322a. <br/> [10] Purdue News Service, “Purdue engineers improve solar cell efficiency, stability @PurdueRP.” https://www.purdue.edu/newsroom/releases/2023/Q1/purdue-engineers-improve-solar-cell-efficiency,-stability.html <br/> [11] National Science Foundation, “Producing solar energy materials that are affordable, efficient and flexible,” NSF - National Science Foundation, Jun. 14, 2022. [Online]. Available: https://new.nsf.gov/news/producing-solar-energy-materials-are-affordable <br/> [12] Z. Hyder, “Solar Panels For Apartments & Renters: Your Options.” https://www.solarreviews.com/blog/solar-panels-for-rental-homes-and-apartments <br/> [13] “Making solar panels more efficient.” https://www.asme.org/topics-resources/content/making-solar-panels-more-efficient <br/> [14] "How solar panels impact the structure of a building - Williams Engineering," Williams College. https://williamsengineering.com/how-solar-panels-impact-the-structure-of-a-building/ <br/> [15] “Solar angles and tracking systems,” TeachEngineering.org, Sep. 30, 2022. https://www.teachengineering.org/lessons/view/cub_pveff_lesson01 <br/> [16] S. Byrne, “Sustainability in Action: Renewable energy engineering,” NEIT, Aug. 17, 2023. https://www.neit.edu/blog/sustainability-in-action-renewable-energy-engineering <br/> [17] T. Ufer, “How mechanical engineers lead advances in renewable energy,” Online Engineering Master's Programs, May 14, 2024. https://online.egr.msu.edu/articles/how-mechanical-engineers-lead-advances-renewable-energy/ <br/> [18] S. McGinnis, “Solar Engineering The Future of Energy: A Comprehensive guide,” EMT Solar & Roofing, Oct. 03, 2023. https://emtsolar.com/solar-engineering/ <br/> </p>
				`
	};

	window.addEventListener("load",function(){
		let i = 0;
		for (let key in pages) {
			console.log(key);
			let li = document.createElement("li");
			li.innerHTML = `<a href="#${key}" class="${
				i == 0 ? "active" : ""
			}">${key}</a>`;
			dynamicMenu.appendChild(li);
			i++;
		}
	});

	window.addEventListener("hashchange", () => {
		console.log(window.location.hash);
		loadPage(window.location.hash);
	});

	function loadPage(hash){
		const page = hash.replace("#", "");
		console.log(page);
		contentDiv.innerHTML = pages[page] || pages.home;
		setActiveLink(page);
	}

	

	function setActiveLink(page) {
		links = document.querySelectorAll("nav ul li a");
		console.log(links);
		links.forEach((link) => {
			link.classList.toggle("active", link.getAttribute("href").includes(page));
		});
	}

	loadPage(window.location.hash);
});