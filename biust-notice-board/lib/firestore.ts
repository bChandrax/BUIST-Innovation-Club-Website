import { 
  collection, 
  getDocs, 
  query, 
  orderBy, 
  limit, 
  where,
  doc,
  getDoc
} from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase/config";

// Fetch recent posts
export const getRecentPosts = async (limitCount = 10) => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(
      postsRef, 
      orderBy("createdAt", "desc"), 
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    const posts = [];
    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      let imageUrl = null;
      
      // Get image URL if image path exists
      if (data.imagePath) {
        try {
          const imageRef = ref(storage, data.imagePath);
          imageUrl = await getDownloadURL(imageRef);
        } catch (error) {
          console.warn("Error fetching image:", error);
        }
      }
      
      posts.push({
        id: doc.id,
        ...data,
        imageUrl,
        createdAt: data.createdAt?.toDate() || new Date()
      });
    }
    
    return posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

// Fetch popular posts
export const getPopularPosts = async (limitCount = 5) => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(
      postsRef, 
      orderBy("views", "desc"), 
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
  } catch (error) {
    console.error("Error fetching popular posts:", error);
    return [];
  }
};

// Fetch notifications
export const getNotifications = async (limitCount = 5) => {
  try {
    const notificationsRef = collection(db, "notifications");
    const q = query(
      notificationsRef, 
      where("isActive", "==", true),
      orderBy("priority", "desc"),
      orderBy("createdAt", "desc"),
      limit(limitCount)
    );
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};

// Fetch posts with pagination
export const getPostsWithPagination = async (page = 1, postsPerPage = 10) => {
  try {
    const postsRef = collection(db, "posts");
    const q = query(
      postsRef, 
      orderBy("createdAt", "desc"),
      limit(postsPerPage * page)
    );
    const querySnapshot = await getDocs(q);
    
    const allPosts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toDate() || new Date()
    }));
    
    const startIndex = (page - 1) * postsPerPage;
    const posts = allPosts.slice(startIndex, startIndex + postsPerPage);
    const totalPages = Math.ceil(allPosts.length / postsPerPage);
    
    return { posts, totalPages };
  } catch (error) {
    console.error("Error fetching posts with pagination:", error);
    return { posts: [], totalPages: 1 };
  }
};
