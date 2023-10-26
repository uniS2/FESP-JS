# FESP: JS 프로그래밍 학습 저장소

- GitHub URL: https://github.com/uzoolove/FESP01-javascript

## 학습 기록

**`Git Subtree` 사용하기**

- 수업 필기 폴더인 workspace만 별도의 레포지토리로 분리하여 관리

1. 원본 레포지토리에 subtree 추가하기

```
git subtree add --prefix=폴더명 <원격 레포지토리 URL> 브랜치명 --squash
```

2. 수정된 코드를 커밋하고 push하기

```
# subtree의 변경사항을 원본 레포지토리로 push 합니다.
git subtree push --prefix=폴더명 <원격 레포지토리 URL> 브랜치명
```

3. Subtree 업데이트하기

```
git subtree pull --prefix=폴더명 <원격 레포지토리 URL> 브랜치명 --squash
```

4. 병합하기

```
git merge -s subtree --no-commit --squash 폴더명
```

5. 커밋하기: 동일
