import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import mongoose from 'mongoose';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';
import User from './models/User.js'; // add .js if you're using ESM


const MONGO_URI = 'mongodb://localhost:27017/users'; 

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



const app = express();

app.get('/api/user', (req, res) => {
  res.json({ user: req.user || null });
});

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true
}));

// Replace with your actual credentials
const GOOGLE_CLIENT_ID = '182660338567-oqg412tp4g9mae4d2dd2j90voocv3sag.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

// Session middleware
app.use(session({ secret: 'your_secret', resave: false, saveUninitialized: true }));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Serialize user into the session
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Configure Google OAuth strategy
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  try {
    // Check if user exists
    let user = await User.findOne({ googleId: profile.id });

    if (!user) {
      // If not, create new user
      user = await User.create({
        googleId: profile.id,
        email: profile.emails[0].value,
        displayName: profile.displayName,
        photo: profile.photos[0].value,
        uuid: uuidv4(), // generate custom UUID
      });
    }

    return done(null, user); // store in session
  } catch (err) {
    return done(err, null);
  }
}));



app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful login
    res.redirect('/profile');
  }
);

app.get('/profile', (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/');
  res.redirect("http://localhost:8080/")
});

app.get('/logout', (req, res) => {
  req.logout(() => {
    res.redirect('/');
  });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log("Server started on http://localhost:${PORT}"));