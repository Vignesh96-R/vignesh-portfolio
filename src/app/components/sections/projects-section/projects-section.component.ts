import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ProjectLink {
  label: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  links: ProjectLink[];
  type: string;
}

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-section.component.html',
  styleUrl: './projects-section.component.scss'
})
export class ProjectsSectionComponent {
  selectedFilter: string = '</>'; // 'all', 'DS', '</>'

  allProjects: Project[] = [
    {
      title: 'RAG-based RBAC Chatbot for AgriTech',
      description: 'Delivered secure, role-specific insights for Admins, Farmers, Field Managers, HR, and other agricultural stakeholders, reducing communication delays and eliminating information silos across farm operations.',
      technologies: ['Python', 'FastAPI', 'RAG', 'Vector Store', 'LLM', 'Streamlit', 'RBAC', 'NLP'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      links: [
        { label: 'Demo Video', url: 'https://github.com/Vignesh96-R/agricTech_chatbot_rag_llm/tree/main/demo_video' },
        { label: 'Project', url: 'https://github.com/Vignesh96-R/agricTech_chatbot_rag_llm' }
      ]
    },
    {
      title: 'Crop Health Monitor',
      description: 'Developed a CNN model trained on plant disease datasets and integrated it as a TensorFlow Lite (.tflite) model into an Android native app for real-time, offline disease detection.',
      technologies: ['Tensorflow', 'CNN', 'Colab', 'Python', 'Pandas', 'Android native', 'Kotlin'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      links: [
        { label: 'CNN Model', url: 'https://colab.research.google.com/drive/1MsvyQ7AUeSfonc0GQEn1KfxlPhLWZiBu?usp=sharing' },
        { label: 'Project', url: 'https://github.com/Vignesh96-R/FarmCare' }
      ]
    },
    // {
    //   title: 'Code2Crop - Tree Detection & Geotagging', //🏆 1st Place in Code2Crop AgriTech Challenge!
    //   description: 'Developed an AI model to detect and geotag healthy Mosambi trees from drone imagery, enabling yield estimation, resource planning, and efficient farm management.',
    //   technologies: ['Computer Vision', 'Deep Learning', 'Drone Imagery', 'Geotagging', 'Python', 'TensorFlow'],
    //   image: 'https://placehold.co/600x400',
    //   type: 'DS',
    //   links: [
    //     { label: 'Challenge', url: 'https://lu.ma/82dg57d0?tk=Vd1y2E' },
    //     { label: 'Project', url: 'https://github.com/Vignesh96-R/code2crop' }
    //   ]
    // },
    // {
    //   title: 'Superstore Sales Analysis & Prediction',
    //   description: 'Analyzed retail sales data to identify top-performing regions, products, and customer segments. Built an interactive Google Sheets dashboard and a regression model in Colab to predict sales and profit.',
    //   technologies: ['Google Sheets', 'Python', 'Colab', 'Pandas', 'Scikit-learn'],
    //   image: 'https://placehold.co/600x400',
    //   type: 'DS',
    //   links: [
    //     { label: 'Dashboard', url: 'https://docs.google.com/spreadsheets/d/1WNkF3dOBJaBukJZ0ypfnozbrtGRLvNzOcudX0GShNnE/edit?gid=0#gid=0' },
    //     { label: 'Project', url: 'https://github.com/Vignesh96-R/superstore_sales_prediction' }
    //   ]
    // },
    {
      title: 'Netflix Movie Recommendation System',
      description: 'Built a machine learning-based recommendation engine using collaborative filtering and content-based filtering on the Netflix Prize dataset to provide personalized movie suggestions for users.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Surprise', 'Matplotlib', 'Seaborn', 'Flask', 'Heroku'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      links: [
        { label: 'View ML Project', url: 'https://github.com/Vignesh96-R/ML_Project/tree/main/Netflix_Movie_Recommendation_System' },
      ]
    },
    {
      title: 'Covid-19 Case Prediction',
      description: 'Developed a time-series forecasting model using ARIMA, Prophet, and LSTM to predict daily Covid-19 case counts across regions, aiding public health decision-making.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'ARIMA', 'Facebook Prophet', 'LSTM', 'Matplotlib', 'Plotly'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      links: [
        { label: 'View ML Project', url: 'https://github.com/Vignesh96-R/ML_Project/tree/main/Covid-19_Case_Prediction' },
      ]
    },
    {
      title: 'Walmart Sales Forecasting',
      description: 'Created a predictive analytics model using Random Forest, XGBoost, and Prophet to forecast Walmart store sales for better inventory and supply chain planning.',
      technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Random Forest', 'Prophet', 'Matplotlib', 'Seaborn'],
      image: 'https://placehold.co/600x400',
      type: 'DS',
      links: [
        { label: 'View ML Project', url: 'https://github.com/Vignesh96-R/ML_Project/tree/main/Walmart_Sales_Forecasting' },
      ]
    },

    {
      title: 'Iksana (Welldercare) - Health & Care Platform',
      description: 'End-to-end platform connecting services and devices for older adults with real-time health insights and safety features.',
      technologies: ['Android Native', 'Kotlin', 'Jetpack', 'Firebase'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      links: [
        { label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.welldercare.com&hl=en_IN' }
      ]
    },
    {
      title: 'Portfolio Website',
      description: 'A modern single-page portfolio showcasing projects, skills, and experience with a clean, responsive design and smooth user interactions.',
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      links: [
        { label: 'View Project', url: 'https://github.com/Vignesh96-R/vignesh-portfolio' }
      ]
    },
    {
      title: 'File Management App',
      description: 'A smart file management app that allows users to store, organize, and set reminders for important documents with offline support and sync capabilities.',
      technologies: ['Android Native', 'Jetpack', 'Kotlin', 'Firebase', 'SqlLite-Room'],
      image: 'https://placehold.co/600x400',
      type: '</>',
      links: [
        { label: 'View Project', url: 'https://github.com/Vignesh96-R/CloudMediaBox' }
      ]
    },
    // {
    //   title: 'Stock Price Prediction with LSTM',
    //   description: 'A deep learning model that analyzes historical stock data to predict future market trends using sequential pattern recognition.',
    //   technologies: ['LSTM', 'Time-series', 'TensorFlow', 'Keras', 'Matplotlib'],
    //   image: 'https://placehold.co/600x400',
    //   type: 'DS',
    //   links: [

    //     { label: 'View Project', url: 'https://github.com/Vignesh96-R/LSTM_predicition' }
    //   ]
    // },
    //   {
    //   title: 'AI-Powered Chatbot with NLP',
    //   description: 'Built an intelligent chatbot using transformers for intent classification and contextual understanding. Integrated with Rasa and Hugging Face models for accurate dialogue handling.',
    //   technologies: ['BERT', 'GPT', 'Transformers', 'Rasa', 'Hugging Face'],
    //   image: 'https://placehold.co/600x400',
    //   type: 'DS',
    //   links: [
    //     { label: 'Try Chatbot', url: '#' },
    //     { label: 'GitHub', url: 'https://github.com/Vignesh96-R/chatbot-nlp' }
    //   ]
    // },
    // {
    //   title: 'Real-Time Object Detection',
    //   description: 'Implemented YOLOv5 with OpenCV to detect and track objects in real-time traffic and CCTV video feeds, achieving low-latency performance in live environments.',
    //   technologies: ['YOLOv5', 'OpenCV', 'Python', 'Real-time Streaming'],
    //   image: 'https://placehold.co/600x400',
    //   type: 'DS',
    //   links: [
    //     { label: 'View Demo', url: '#' },
    //     { label: 'GitHub', url: 'https://github.com/Vignesh96-R/yolo-object-detection' }
    //   ]
    // },
    // {
    //   title: 'End-to-End ML Web App',
    //   description: 'Developed a full-stack machine learning app with classification/regression capabilities, deployed using Streamlit and Docker on Azure for scalable access.',
    //   technologies: ['Streamlit', 'FastAPI', 'Docker', 'Azure', 'Python'],
    //   image: 'https://placehold.co/600x400',
    //   type: 'DS',
    //   links: [
    //     { label: 'Live App', url: '#' },
    //     { label: 'GitHub', url: 'https://github.com/Vignesh96-R/ml-web-app' }
    //   ]
    // },

  ];

  get projects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(project => project.type === this.selectedFilter);
  }

  filterProjects(filter: string): void {
    this.selectedFilter = filter;
  }

  getExternalLinkIcon(): string {
    // External link icon SVG path
    return 'M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3v3m-11 8 9-9';
  }

  getLinkIcon(linkType: string): string {
    switch (linkType) {
      case 'github': return 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z';
      case 'demo': return 'M15 12a3 3 0 11-6 0 3 3 0 016 0z';
      case 'live': return 'M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14';
      case 'documentation': return 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z';
      default: return 'M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m5-3h3v3m-11 8 9-9';
    }
  }

  getButtonClass(linkType: string): string {
    switch (linkType) {
      case 'github': return 'bg-gray-900 hover:bg-gray-800 text-white';
      case 'demo': return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'live': return 'bg-green-600 hover:bg-green-700 text-white';
      case 'documentation': return 'bg-purple-600 hover:bg-purple-700 text-white';
      default: return 'bg-gray-100 hover:bg-gray-200 text-gray-900';
    }
  }
}
