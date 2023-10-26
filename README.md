# 프론트엔드 스쿨 플러스: 자바스크립트 프로그래밍 학습 저장소

## 학습 기록 관리

**`Git Subtree` 사용하기: 특정 폴더를 별도의 레포지토리로 분리**

1. 원본 레포지토리에 subtree 추가하기

```
git subtree add --prefix=폴더명 <원격 레포지토리 URL> 브랜치명 --squash
```

2. 수정된 코드를 커밋하고 push하기

```
# subtree의 변경사항을 원본 레포지토리로 push합니다.
git subtree push --prefix=폴더명 <원격 레포지토리 URL> 브랜치명
```
