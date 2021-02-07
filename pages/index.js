import React from "react";
import Button from "@material-ui/core/Button";
import Head from "next/head";
import Link from "next/link";
import styles from "../components/index.module.css";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.div}>
        <Link href="/posts/sign_in">
          <Button color="primary">Sign in</Button>
        </Link>
        <Link href="/posts/sign_up">
          <Button
            variant="contained"
            color="primary"
            style={{ marginLeft: 1 + "em", position: 'auto' }}
          >
            Sign up
          </Button>
        </Link>
      </div>
      <Container maxWidth="sm">
        <body>
          <br />
          <br />
          <h1>カレンダーマーキング法</h1>
          <br />
          <div>
            <h2>目的：自分にとっての幸せを知る</h2>
            <br />
            一日一日を振り返り自分自身の幸福感を高めてくれる行動が何かを調べ、
            幸福になる条件となる1日の出来事まとめることにより、
            <b>自分にとっての幸せ</b>が見えてきます。
          </div>
          <br />
          <h2>カレンダーマーキング法のやり方</h2>
          <br />
          1.カレンダーの今日の日付をクリック
          <br />
          　一日の評価を設定する画面になるので、5段階で評価をつけてください。
          <br />
          　記述例　悪い：☆☆☆☆★　良い：★★★★★
          <br />
          <br />
          　一日の良かったこと・悪かったことを記述し完了したら追加ボタンを押してください。
          <br />
          <br />
          <br />
          2.今日の日付より過去の日付をクリック
          <br />
          　これまでに登録した一日の評価が確認できるので
          <br />
          　自分がどういうときに幸せに感じるかを確認しましょう！！
        </body>
      </Container>
    </React.Fragment>
  );
}
