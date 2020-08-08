##inicio
yarn create react-app web --templete typescript

##git
echo "# nextlevelweek" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/pabloverly/nextlevelweek.git
git push -u origin master
                

## Resolver problema (It looks like you're trying to use TypeScript but do not have typescript installed. Please install typescript by running yarn add typescript.)

npm install --save typescript @types/node @types/react @types/react-dom @types/jest
# or
yarn add typescript @types/node @types/react @types/react-dom @types/jest

###Router
yarn add react-router-dom
npm install @types/react-router-dom   

###CONSUMIR BIBLIOTECA
yarn add axios 